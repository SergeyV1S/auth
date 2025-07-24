import { Card, CardContent, CardHeader, CardTitle } from "@shared/ui";

import { LoginForm } from "./_components";

const LoginPage = () => (
  <div className='container'>
    <main className='flex h-screen items-center justify-center'>
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </main>
  </div>
);

export default LoginPage;
