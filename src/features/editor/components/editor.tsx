"use client";

interface EditorProps {
    initialData: {
        name: string;
        json: string;
        width: number;
        height: number;
    };
};

export const Editor = ({ initialData }: EditorProps) => {

    return <div>Editor</div>
}