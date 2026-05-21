"use client";

export default function AdminPage() {

  return (

    <main className="min-h-screen bg-black text-white px-10 py-20">

      {/* Header */}
      <div className="flex items-center justify-between mb-16">

        <div>

          <h1 className="text-6xl font-black text-green-400">

            Admin Panel

          </h1>

          <p className="text-gray-500 mt-4">

            CyberShield control center

          </p>

        </div>

        <button className="bg-green-400 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">

          Generate Report

        </button>

      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-8">

        <div className="bg-zinc-900 border border-green-400 rounded-3xl p-8">

          <h2 className="text-gray-400 text-lg">

            Total Users

          </h2>

          <p className="text-5xl font-black text-green-400 mt-4">

            12,847

          </p>

        </div>

        <div className="bg-zinc-900 border border-green-400 rounded-3xl p-8">

          <h2 className="text-gray-400 text-lg">

            Threats Blocked

          </h2>

          <p className="text-5xl font-black text-green-400 mt-4">

            98,221

          </p>

        </div>

        <div className="bg-zinc-900 border border-green-400 rounded-3xl p-8">

          <h2 className="text-gray-400 text-lg">

            Revenue

          </h2>

          <p className="text-5xl font-black text-green-400 mt-4">

            ₹4.2L

          </p>

        </div>

        <div className="bg-zinc-900 border border-green-400 rounded-3xl p-8">

          <h2 className="text-gray-400 text-lg">

            Servers

          </h2>

          <p className="text-5xl font-black text-green-400 mt-4">

            ACTIVE

          </p>

        </div>

      </div>

      {/* User Table */}
      <div className="mt-20 bg-zinc-900 border border-zinc-800 rounded-3xl p-10 overflow-x-auto">

        <h2 className="text-4xl font-black mb-10">

          Recent Users

        </h2>

        <table className="w-full">

          <thead>

            <tr className="border-b border-zinc-700 text-left">

              <th className="pb-4">Name</th>
              <th className="pb-4">Email</th>
              <th className="pb-4">Plan</th>
              <th className="pb-4">Status</th>

            </tr>

          </thead>

          <tbody>

            <tr className="border-b border-zinc-800">

              <td className="py-6">

                Cyber User

              </td>

              <td>

                user@test.com

              </td>

              <td>

                Pro

              </td>

              <td className="text-green-400">

                Active

              </td>

            </tr>

            <tr className="border-b border-zinc-800">

              <td className="py-6">

                Admin User

              </td>

              <td>

                admin@test.com

              </td>

              <td>

                Enterprise

              </td>

              <td className="text-green-400">

                Active

              </td>

            </tr>

            <tr>

              <td className="py-6">

                Demo User

              </td>

              <td>

                demo@test.com

              </td>

              <td>

                Starter

              </td>

              <td className="text-yellow-400">

                Pending

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </main>
  );
}