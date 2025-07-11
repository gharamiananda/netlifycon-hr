export enum UserRole {
  ADMIN = "admin",
  SUPERADMIN = "superadmin",
  USER = "user",
}
export interface IUser {
  //   _id: string;
  email: string;
  password: string;
  name: string;
  role: UserRole;
  hasShop: boolean;
  clientInfo: {
    device: "pc" | "mobile"; // Device type
    browser: string; // Browser name
    ipAddress: string; // User IP address
    pcName?: string; // Optional PC name
    os?: string; // Optional OS name (Windows, MacOS, etc.)
    userAgent?: string; // Optional user agent string
  };
  lastLogin: Date;
  isActive: boolean;
  otpToken?: string | null;
  createdAt: Date;
  updatedAt: Date;
  avatar: string;
}
