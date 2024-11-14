import React from "react";

export type Message =
    | { success: string }
    | { error: string }
    | { message: string };

const FormMessage: React.FC = ({ message }: { message: Message }) => {
    return (
        <div className="messages-wrapper">
            {"success" in message && (
                <div className="success">{message.success}</div>
            )}
            {"error" in message && <div className="error">{message.error}</div>}
            {"message" in message && (
                <div className="message">{message.message}</div>
            )}
        </div>
    );
};

export default FormMessage;
