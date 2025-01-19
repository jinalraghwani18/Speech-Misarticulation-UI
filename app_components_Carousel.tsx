'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Mic, RotateCcw, ArrowRight } from 'lucide-react'
import { Word } from '../types'

interface CarouselProps {
  word: Word
  onNext: (word: string, isCorrect: boolean) => void
}

export default function Carousel({ word, onNext }: CarouselProps) {
  const [isRecording, setIsRecording] = useState(false)
  const [hasRecorded, setHasRecorded] = useState(false)

  const handleRecord = () => {
    setIsRecording(true)
    // Simulate recording for 3 seconds
    setTimeout(() => {
      setIsRecording(false)
      setHasRecorded(true)
    }, 3000)
  }

  const handleRetake = () => {
    setHasRecorded(false)
  }

  const handleNext = () => {
    // Simulate checking pronunciation (randomly for this example)
    const isCorrect = Math.random() > 0.5
    onNext(word.word, isCorrect)
    setHasRecorded(false)
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="p-6">
        <div className="flex flex-col items-center mb-6">
          <Image src={word.image || "/placeholder.svg"} alt={word.word} width={200} height={200} className="mb-4 rounded-lg shadow-md" />
          <h2 className="text-4xl font-bold mb-2">{word.word}</h2>
          <p className="text-xl text-gray-600 mb-4">{word.ipa}</p>
          
        </div>
        <div className="flex flex-col items-center gap-4">
          <Button
            onClick={handleRecord}
            disabled={isRecording || hasRecorded}
            className="w-full"
          >
            <Mic className="mr-2 h-4 w-4" /> {isRecording ? 'Recording...' : 'Start Recording'}
          </Button>
          {hasRecorded && (
            <>
              <Button
                onClick={handleRetake}
                variant="outline"
                className="w-full"
              >
                <RotateCcw className="mr-2 h-4 w-4" /> Retake
              </Button>
              <Button
                onClick={handleNext}
                className="w-full"
              >
                <ArrowRight className="mr-2 h-4 w-4" /> Next Word
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

