import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FormEvent, ReactNode, useState } from "react";

const DEMO_PASSWORD = "smile315";
const DEMO_AUTH_KEY = "smf_demo_auth_v1";

type DemoAccessGateProps = {
  children: ReactNode;
};

const hasDemoAccess = () => {
  if (typeof window === "undefined") return false;
  return window.sessionStorage.getItem(DEMO_AUTH_KEY) === "ok";
};

export default function DemoAccessGate({ children }: DemoAccessGateProps) {
  const [isAuthorized, setIsAuthorized] = useState(hasDemoAccess);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password === DEMO_PASSWORD) {
      window.sessionStorage.setItem(DEMO_AUTH_KEY, "ok");
      setIsAuthorized(true);
      setError("");
      return;
    }

    setError("パスワードが違います。");
  };

  if (isAuthorized) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--turquoise)]/20 via-white to-[var(--yellow)]/25 flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-black/5 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl">デモページ</CardTitle>
          <CardDescription>
            `/demo` 配下はパスワード入力後に閲覧できます。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <label className="block text-sm font-medium" htmlFor="demo-password">
              パスワード
            </label>
            <input
              id="demo-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--turquoise)]"
              autoComplete="current-password"
            />
            {error && <p className="text-sm text-red-600">{error}</p>}
            <Button className="w-full bg-[var(--turquoise)] hover:bg-[var(--turquoise)]/90" type="submit">
              入室する
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
