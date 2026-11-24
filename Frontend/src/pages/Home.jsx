
import { signInWithPopup } from "firebase/auth";
import { HiOutlineSparkles } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";

import { auth, googleProvider } from "../../utils/firebase";
import api from "../../utils/axios";

const Home = () => {

  // Backend authentication
  const handleLogin = async (token) => {
    try {
      const { data } = await api.post("/auth/login", { token });

      console.log("Backend login successful:", data);

      return data;
    } catch (error) {
      console.error(
        "Backend login failed:",
        error.response?.data || error.message
      );

      throw error;
    }
  };

  // Google authentication
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);

      const token = await result.user.getIdToken();

      console.log("Firebase token generated");

      await handleLogin(token);

      console.log("Google user:", result.user);

    } catch (error) {
      console.error(
        "Google login failed:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <main className="relative isolate min-h-dvh w-full overflow-x-hidden bg-black text-white lg:grid lg:grid-cols-2">

      {/* FULL PAGE DARK BACKDROP */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-black/60 backdrop-blur" />

      {/* BACKGROUND GLOW EFFECTS */}
      <div className="pointer-events-none fixed -left-40 top-1/4 -z-10 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="pointer-events-none fixed -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-purple-600/8 blur-[140px]" />


      {/* LEFT SECTION - DESKTOP */}
      <section className="relative hidden min-h-dvh flex-col justify-between overflow-hidden border-r border-white/6 bg-[#0d0e14]/80 p-10 lg:flex xl:p-16">

        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-violet-600/10 blur-[120px]" />

        {/* BRAND */}
        <div className="relative flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/10">
            <HiOutlineSparkles className="h-6 w-6 text-violet-400" />
          </div>

          <span className="text-xl font-bold tracking-wide">
            AGENVYR
          </span>
        </div>


        {/* HERO CONTENT */}
        <div className="relative max-w-xl space-y-6">

          <span className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
            Your AI workspace
          </span>

          <h1 className="text-5xl font-bold leading-tight xl:text-6xl">
            Intelligence that
            <span className="block text-violet-400">
              works with you.
            </span>
          </h1>

          <p className="max-w-md text-base leading-8 text-slate-400">
            Build, manage and orchestrate intelligent AI agents
            in one unified workspace.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">

            <span className="rounded-full border border-white/10 bg-white/4 px-4 py-2 text-xs text-slate-300">
              AI Agents
            </span>

            <span className="rounded-full border border-white/10 bg-white/4 px-4 py-2 text-xs text-slate-300">
              Automation
            </span>

            <span className="rounded-full border border-white/10 bg-white/4 px-4 py-2 text-xs text-slate-300">
              Intelligent Workflows
            </span>

          </div>
        </div>


        {/* DESKTOP FOOTER */}
        <p className="relative text-xs text-slate-600">
          © 2026 AGENVYR. All rights reserved.
        </p>

      </section>


      {/* RIGHT SECTION - LOGIN */}
      <section className="relative flex min-h-dvh items-center justify-center px-5 py-10 sm:px-8 lg:px-10">

        <div className="w-full max-w-95">

          {/* MOBILE BRANDING */}
          <div className="mb-10 flex items-center justify-center gap-2 lg:hidden">

            <HiOutlineSparkles className="h-7 w-7 text-violet-400" />

            <span className="text-xl font-bold tracking-wide">
              AGENVYR
            </span>

          </div>


          {/* LOGIN CARD */}
          <div className="rounded-3xl border border-white/8 bg-[#13141b]/95 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-9">

            <div className="flex flex-col items-center text-center">

              {/* ICON */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/8 shadow-lg shadow-violet-500/10">

                <HiOutlineSparkles className="h-8 w-8 text-violet-400" />

              </div>


              {/* HEADING */}
              <h2 className="text-2xl font-bold tracking-tight">
                Welcome to AGENVYR
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Sign in to your account to get started.
              </p>


              {/* GOOGLE LOGIN BUTTON */}
              <button
                type="button"
                onClick={googleLogin}
                className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-all duration-200 hover:scale-[1.03] hover:bg-slate-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >

                <FcGoogle className="h-5 w-5" />

                Continue with Google

              </button>


              {/* AUTH INFO */}
              <p className="mt-3 text-xs text-slate-500">
                Secure authentication powered by Google
              </p>

            </div>


            {/* FOOTER */}
            <div className="mt-8 border-t border-white/8 pt-5 text-center">

              <p className="text-xs leading-6 text-slate-500">

                By continuing, you agree to our{" "}

                <a
                  href="/terms"
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  Terms of Service
                </a>

                {" "}and{" "}

                <a
                  href="/privacy"
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  Privacy Policy
                </a>.

              </p>

            </div>

          </div>


          {/* MOBILE FOOTER */}
          <p className="mt-6 text-center text-xs text-slate-600 lg:hidden">
            © 2026 AGENVYR. All rights reserved.
          </p>

        </div>

      </section>

    </main>
  );
};

export default Home;
