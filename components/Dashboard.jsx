"use client";

export default function Dashboard() {

  return (

    <section className="min-h-screen bg-black text-white px-10 py-24">

      <h1 className="text-6xl font-black mb-16">

        CyberShield Dashboard

      </h1>

      {/* Cards */}
      <div className="grid md:grid-cols-4 gap-8">

        <div className="bg-zinc-900 border border-green-400 p-8 rounded-3xl">

          <h2 className="text-gray-400 text-lg">

            Threats Blocked

          </h2>

          <p className="text-5xl font-black text-green-400 mt-4">

            12,847

          </p>

        </div>

        <div className="bg-zinc-900 border border-green-400 p-8 rounded-3xl">

          <h2 className="text-gray-400 text-lg">

            Active Users

          </h2>

          <p className="text-5xl font-black text-green-400 mt-4">

            3,291

          </p>

        </div>

        <div className="bg-zinc-900 border border-green-400 p-8 rounded-3xl">

          <h2 className="text-gray-400 text-lg">

            Security Score

          </h2>

          <p className="text-5xl font-black text-green-400 mt-4">

            98%

          </p>

        </div>

        <div className="bg-zinc-900 border border-green-400 p-8 rounded-3xl">

          <h2 className="text-gray-400 text-lg">

            AI Monitoring

          </h2>

          <p className="text-5xl font-black text-green-400 mt-4">

            ACTIVE

          </p>

        </div>

      </div>

      {/* Activity */}
      <div className="mt-20 bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

        <h2 className="text-3xl font-black mb-10">

          Recent Activity

        </h2>

        <div className="space-y-6">

          <div className="flex justify-between border-b border-zinc-800 pb-4">

            <span>

              Malware attack blocked

            </span>

            <span className="text-green-400">

              SUCCESS

            </span>

          </div>

          <div className="flex justify-between border-b border-zinc-800 pb-4">

            <span>

              Suspicious login detected

            </span>

            <span className="text-yellow-400">

              WARNING

            </span>

          </div>

          <div className="flex justify-between border-b border-zinc-800 pb-4">

            <span>

              Firewall updated

            </span>

            <span className="text-blue-400">

              UPDATED

            </span>

          </div>

          <div className="flex justify-between">

            <span>

              AI system scan completed

            </span>

            <span className="text-green-400">

              COMPLETE

            </span>

          </div>

        </div>

      </div>

    </section>
  );
}