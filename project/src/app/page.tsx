export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Orbit Notes
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            A lightweight team workspace for capturing meeting notes, decisions, and action items. 
            Turn messy conversations into clear next steps.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a 
              href="/sign-up"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Get Started
            </a>
            <a 
              href="/sign-in"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold border border-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              Sign In
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Capture Everything</h3>
              <p className="text-gray-600">
                Take meeting notes with rich text formatting. Organize by project and never lose track of important discussions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Track Action Items</h3>
              <p className="text-gray-600">
                Extract tasks from your notes, assign them to teammates, and track progress from open to done.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Find Anything Fast</h3>
              <p className="text-gray-600">
                Search across all your team's notes and decisions. Stay informed with an activity timeline of recent changes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
