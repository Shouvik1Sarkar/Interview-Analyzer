function HowItWorks() {
  return (
    <>
      <main className="min-h-screen bg-white text-[#0b102d]">
        {/* Navbar */}
        {/* <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#7047ff] text-sm text-white">
              ✦
            </div>

            <h1 className="text-xl font-bold text-black">InterviewAI</h1>
          </div>

          <div className="hidden items-center gap-10 text-sm md:flex">
            <a href="/" className="text-gray-600 transition hover:text-black">
              Home
            </a>

            <a href="/how-it-works" className="font-medium text-[#7047ff]">
              How it works
            </a>

            <a
              href="/features"
              className="text-gray-600 transition hover:text-black"
            >
              Features
            </a>
          </div>

          <a
            href="/"
            className="rounded-lg bg-[#0b102d] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#171d42]"
          >
            Analyze Interview
          </a>
        </nav> */}

        {/* Hero */}
        <section className="mx-auto max-w-4xl px-6 pb-16 pt-20 text-center">
          <div className="mb-5 inline-flex rounded-full bg-purple-50 px-4 py-2 text-xs font-semibold text-[#7047ff]">
            HOW IT WORKS
          </div>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            From interview transcript to
            <span className="block bg-gradient-to-r from-[#5b55ff] to-[#9b4dff] bg-clip-text text-transparent">
              useful feedback in seconds.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-500">
            InterviewAI analyzes your interview transcript to identify the
            questions you were asked, understand your responses, and provide
            clear feedback that can help you prepare for your next interview.
          </p>
        </section>

        {/* Steps */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Step 1 */}
            <div className="rounded-2xl border border-gray-200 p-7">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-xl text-[#7047ff]">
                  01
                </div>

                <span className="text-xs font-medium text-gray-400">INPUT</span>
              </div>

              <h3 className="text-xl font-bold">Paste your transcript</h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Copy and paste the transcript from your interview into
                InterviewAI. The transcript can contain both the interviewer's
                questions and your responses.
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl border border-gray-200 p-7">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-xl text-[#7047ff]">
                  02
                </div>

                <span className="text-xs font-medium text-gray-400">
                  ANALYZE
                </span>
              </div>

              <h3 className="text-xl font-bold">AI analyzes the interview</h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Our AI processes the conversation, identifies interview
                questions, examines your answers, and looks for important
                technologies and concepts discussed during the interview.
              </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl border border-gray-200 p-7">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-xl text-[#7047ff]">
                  03
                </div>

                <span className="text-xs font-medium text-gray-400">
                  RESULTS
                </span>
              </div>

              <h3 className="text-xl font-bold">Get actionable feedback</h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Receive an organized analysis of your interview, including
                questions asked, topics covered, strengths, areas that could be
                improved, and stronger example answers.
              </p>
            </div>
          </div>
        </section>

        {/* Explanation */}
        <section className="border-y border-gray-100 bg-[#fafaff]">
          <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-2">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#7047ff]">
                What InterviewAI looks for
              </p>

              <h2 className="text-3xl font-bold leading-tight">
                Understand more than just what questions were asked.
              </h2>

              <p className="mt-5 text-sm leading-7 text-gray-500">
                Instead of simply summarizing the conversation, InterviewAI
                looks at the structure of the interview and turns it into
                information you can actually use while preparing for future
                interviews.
              </p>
            </div>

            <div className="grid gap-3">
              {[
                "Questions asked during the interview",
                "Your answers to each question",
                "Technical topics and technologies discussed",
                "Strong points in your responses",
                "Important concepts you may have missed",
                "Improved example answers for revision",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white px-5 py-4"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple-50 text-sm font-bold text-[#7047ff]">
                    ✓
                  </div>

                  <p className="text-sm font-medium text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="text-3xl font-bold">
            Ready to analyze your interview?
          </h2>

          <p className="mt-4 text-gray-500">
            Paste your transcript and turn your interview into useful feedback.
          </p>

          <a
            href="/"
            className="mt-8 inline-block rounded-lg bg-gradient-to-r from-[#5b55ff] to-[#8b4dff] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition hover:opacity-90"
          >
            Analyze an Interview →
          </a>
        </section>
      </main>
    </>
  );
}

export default HowItWorks;
