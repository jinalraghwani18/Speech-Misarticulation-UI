'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, X, FileDown, RotateCcw } from 'lucide-react'
import { Word } from '../types'

interface ResultScreenProps {
  results: Record<string, boolean>
  words: Word[]
  onRestart: () => void
}

export default function ResultScreen({ results, words, onRestart }: ResultScreenProps) {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null)

  const correctWords = words.filter(word => results[word.word])
  const incorrectWords = words.filter(word => !results[word.word])
  const accuracy = (correctWords.length / words.length) * 100

  const generatePDF = () => {
    // Simulate PDF generation
    setTimeout(() => {
      setPdfUrl('/sample.pdf')
    }, 2000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Your Results</h1>
      <p className="text-center mb-8 text-gray-600">Great job completing the assessment! Here's how you did:</p>
      <Card className="mb-8">
        <CardContent className="p-6">
          <p className="text-4xl font-bold mb-4 text-center">Accuracy: {accuracy.toFixed(2)}%</p>
          <p className="text-center mb-4">You correctly pronounced {correctWords.length} out of {words.length} words.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button onClick={generatePDF} disabled={pdfUrl !== null}>
              {pdfUrl ? 'Report Generated' : 'Generate Report'}
            </Button>
            {pdfUrl && (
              <Button asChild>
                <a href={pdfUrl} download>
                  <FileDown className="mr-2 h-4 w-4" /> Download Report
                </a>
              </Button>
            )}
            <Button onClick={onRestart} variant="outline">
              <RotateCcw className="mr-2 h-4 w-4" /> Start New Assessment
            </Button>
          </div>
        </CardContent>
      </Card>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Check className="mr-2 h-5 w-5 text-green-500" />
              Well Pronounced
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              {correctWords.map(word => (
                <li key={word.word} className="mb-2 flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  {word.word} <span className="text-gray-500 ml-2">({word.ipa})</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <X className="mr-2 h-5 w-5 text-red-500" />
              Needs Practice
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              {incorrectWords.map(word => (
                <li key={word.word} className="mb-2 flex items-center">
                  <X className="mr-2 h-4 w-4 text-red-500" />
                  {word.word} <span className="text-gray-500 ml-2">({word.ipa})</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

