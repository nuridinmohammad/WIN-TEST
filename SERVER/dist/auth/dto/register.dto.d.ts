declare enum Gender {
    PRIA = "PRIA",
    PEREMPUAN = "PEREMPUAN"
}
export declare class RegisterDto {
    name: string;
    gender: Gender;
    email: string;
    password: string;
}
export {};
