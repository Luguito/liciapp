export interface LoginData {
    email: string;
    password: string;
};


export interface LoginProps {
    submitForm: (data: LoginData) => void;
};
