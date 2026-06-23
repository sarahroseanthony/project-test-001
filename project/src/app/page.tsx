import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Orbit Notes
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Lightweight team workspace for capturing meeting notes, decisions, and action items. 
            Turn messy conversations into clear next steps.
          </p>
          
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center mb-12">
            <Link
              href="/sign-up"
              className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/sign-in"
              className="inline-block px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Sign In
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Capture & Organize
              </h3>
              <p className="text-gray-600">
                Create notes during or after meetings. Organize by project to keep everything in its place.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Track Action Items
              </h3>
              <p className="text-gray-600">
                Extract tasks from discussions, assign to teammates, and track progress to completion.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Search & Find
              </h3>
              <p className="text-gray-600">
                Quickly search across all notes to find decisions, context, and important discussions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
