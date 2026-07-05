import { X, ClipboardList } from "lucide-react"

interface ClaimModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ClaimModal({ isOpen, onClose }: ClaimModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
      <div className="bg-gray-900 rounded-2xl max-w-md w-full p-8 relative animate-slide-up shadow-2xl border border-gray-700">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
          aria-label="Close"
          type="button"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center">
          <div className="bg-gradient-to-r from-green-400 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <ClipboardList className="w-8 h-8 text-gray-900" />
          </div>

          <h3 className="text-3xl font-bold text-white mb-4">
            Claim Your Free Class!
          </h3>

          <p className="text-gray-300 mb-6 text-lg">
            We will redirect you to a form. Simply fill it in with:
          </p>

          <div className="bg-gray-800 rounded-lg p-6 mb-6 text-left">
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>Your name</span>
              </li>
            </ul>
          </div>

          <p className="text-gray-300 mb-6 text-lg">
            Then simply turn up and let us know that you would like to claim your first class for free!
          </p>

          <a
            href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__sfk8i9UOUZaNzJWSDg2VkNTMzRZUkFENUNNTFZWSy4u"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full bg-gradient-to-r from-green-400 to-green-600 text-gray-900 font-bold text-lg px-8 py-4 rounded-full hover:scale-105 transform transition shadow-lg"
          >
            Open Form
          </a>

          <button
            onClick={onClose}
            className="mt-4 text-gray-400 hover:text-white transition text-sm"
            type="button"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  )
}
