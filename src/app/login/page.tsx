'use client'

import { useState } from 'react'

export default function LoginPage() {
  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')

  return (
    <main className="min-h-screen bg-green-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-900">
            नेपाली कांग्रेस
          </h1>
          <p className="text-gray-600 mt-2">सदस्यता प्रणाली</p>
        </div>

        <form className="space-y-6">
          
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              मोबाइल नम्बर
            </label>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="98XXXXXXXX"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              पासवर्ड
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-900 text-white py-3 rounded-lg font-medium"
          >
            लगइन गर्नुहोस्
          </button>

          <div className="text-center text-sm text-gray-600">
            नयाँ सदस्य?{' '}
            <a href="/register" className="text-green-700 font-medium">
              दर्ता गर्नुहोस्
            </a>
          </div>

        </form>

      </div>
    </main>
  )
}