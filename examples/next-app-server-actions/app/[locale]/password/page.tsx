import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function Page() {
  async function checkPassword(formData: FormData) {
    'use server';

    const password = formData.get('pass');

    // replace process.env.PASSWORD_PROTECT by any dumb password

    if (password === 'test') {
      cookies().set('login', 'true');
      redirect('/');
    } else {
      redirect('/password');
    }
  }

  return (
    <div className="container">
      <div className="grid place-content-center min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl">This Page is Under Development... </h1>
          <p>Enter Password:</p>
          <form action={checkPassword}>
            <div className="form-control">
              <div className="input-group">
                <input type="text" name="pass" className="input input-bordered" />
                <button className="btn" type="submit">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
