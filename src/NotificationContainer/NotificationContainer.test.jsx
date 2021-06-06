import {render, screen} from "@testing-library/react";
import {NotificationContainer} from "./NotificationContainer";

describe("when rendered", () => {
    test("should contains children component", () => {
        render(<NotificationContainer>Test children</NotificationContainer>);
        expect(screen.queryByText(/Test children/)).toBeInTheDocument();
    });

    test("should display no notifications initially", () => {
        render(<NotificationContainer>Test children</NotificationContainer>);
        expect(screen.queryByRole(/alert/)).not.toBeInTheDocument();
    });
});
