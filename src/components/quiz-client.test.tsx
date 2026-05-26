import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { QuizClient } from "@/components/quiz-client";
import { QUESTIONS } from "@/lib/quiz-data";

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) => (
    <a href={href} {...props}>
      {children}
    </a>
  )
}));

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn() })
}));

describe("QuizClient", () => {
  afterEach(() => {
    cleanup();
    vi.useRealTimers();
  });

  it("moves selection and focus through answers with arrow keys", () => {
    render(<QuizClient />);

    const group = screen.getByRole("radiogroup");
    const radios = screen.getAllByRole("radio");

    radios[0].focus();
    fireEvent.keyDown(group, { key: "ArrowDown" });

    expect(radios[1].getAttribute("aria-checked")).toBe("true");
    expect(document.activeElement).toBe(radios[1]);
  });

  it("removes the next question button and advances shortly after clicking an answer", async () => {
    vi.useFakeTimers();
    render(<QuizClient />);

    expect(screen.queryByRole("button", { name: /next question/i })).toBeNull();

    fireEvent.click(screen.getAllByRole("radio")[0]);

    expect(screen.getByRole("heading", { name: QUESTIONS[0].prompt })).toBeTruthy();

    await act(async () => {
      vi.advanceTimersByTime(449);
    });

    expect(screen.getByRole("heading", { name: QUESTIONS[0].prompt })).toBeTruthy();

    await act(async () => {
      vi.advanceTimersByTime(1);
    });

    expect(screen.getByRole("heading", { name: QUESTIONS[1].prompt })).toBeTruthy();
  });

  it("starts the same delayed advance from a pointer press", async () => {
    vi.useFakeTimers();
    render(<QuizClient />);

    fireEvent.pointerDown(screen.getAllByRole("radio")[0], { pointerType: "mouse" });

    await act(async () => {
      vi.advanceTimersByTime(450);
    });

    expect(screen.getByRole("heading", { name: QUESTIONS[1].prompt })).toBeTruthy();
  });

  it("places the previous arrow immediately before the question counter", async () => {
    vi.useFakeTimers();
    render(<QuizClient />);

    fireEvent.click(screen.getAllByRole("radio")[0]);

    await act(async () => {
      vi.advanceTimersByTime(450);
    });

    const previousButton = screen.getByRole("button", { name: /previous question/i });
    const counter = screen.getByText(`2/${QUESTIONS.length}`);

    expect(previousButton.textContent).toBe("");
    expect(previousButton.parentElement).toBe(counter.parentElement);
    expect(Array.from(counter.parentElement?.children ?? [])).toEqual([previousButton, counter]);
  });

  it("shows the current-question validation message under the controls line", async () => {
    vi.useFakeTimers();
    render(<QuizClient />);

    for (let index = 0; index < QUESTIONS.length - 1; index += 1) {
      fireEvent.click(screen.getAllByRole("radio")[0]);
      await act(async () => {
        vi.advanceTimersByTime(450);
      });
    }

    fireEvent.click(screen.getByRole("button", { name: /reveal my philosopher/i }));

    const controls = document.querySelector(".quiz-controls");
    const error = screen.getByText("Choose one answer before moving forward.");

    expect(error.closest(".quiz-controls")).toBe(controls);
  });
});
