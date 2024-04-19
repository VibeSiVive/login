import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="flex items-center justify-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Image className="w-full" src="/icon.png" alt="Placeholder Image" width={500} height={500} />
          <div className="px-6 py-4">
            <div className="card-body">
              <h2 className="mb-5 text-center text-2xl font-bold">Log in</h2>
              <form>
                <div className="mb-5">
                  <input type="email" id="email" name="email" placeholder="Email address" className="w-full p-2.5 rounded border border-gray-300" />
                </div>
                <div className="mb-5">
                  <input type="password" id="password" name="password" placeholder="Password" className="w-full p-2.5 rounded border border-gray-300" />
                </div>
                <button type="submit" className="w-full p-3 rounded bg-blue-500 text-white font-bold cursor-pointer">Log in</button>
              </form>
              <p className="text-center mt-5">Don't have an account? <a href="#" className="text-blue-500 font-bold">Sign up</a></p>
              <p className="text-center mt-5">Or log in with</p>
              <div className="flex justify-center mt-5">
                <button className="w-full p-3 rounded bg-blue-500 text-white font-bold cursor-pointer">Google</button>
              </div>
            </div>
            <div className="powered-by text-center mt-5">Powered by Vivencio Bataga II</div>
          </div>
        </div>
      </div>
    </main>
  );
}
