import AuthLayoutBase  from "@pages/auth/AuthLayout";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <AuthLayoutBase>{children}</AuthLayoutBase>;
}