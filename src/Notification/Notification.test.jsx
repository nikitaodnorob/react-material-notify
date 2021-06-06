import {render, screen} from "@testing-library/react";
import {Notification} from "./Notification";

describe("when rendered", () => {
    test("should contain message", () => {
        const notificationData = {message: "Test message"};
        render(<Notification notification={notificationData}/>);
        expect(screen.queryByText(/Test message/)).toBeInTheDocument();
    });

    test("should correctly display notification with `error` level", () => {
        const testCases = [
            {level: "error", expectedClassName: "MuiAlert-filledError"},
            {level: "warning", expectedClassName: "MuiAlert-filledWarning"},
            {level: "info", expectedClassName: "MuiAlert-filledInfo"},
            {level: "success", expectedClassName: "MuiAlert-filledSuccess"},
        ];

        testCases.forEach((testCase) => {
            const notificationData = {message: "Test message", level: testCase.level};
            const {unmount} = render(<Notification notification={notificationData}/>);

            const notification = screen.queryByRole(/alert/);
            expect(notification).toBeInTheDocument();
            expect(notification.classList.contains(testCase.expectedClassName)).toBeTruthy();
            unmount();
        });
    });
})
