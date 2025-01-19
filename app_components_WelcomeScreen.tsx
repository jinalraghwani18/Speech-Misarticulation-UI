import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface WelcomeScreenProps {
  onStart: () => void
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl text-center">Welcome to Speech Misarticulation Detection</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-center text-lg">
            Improve your pronunciation skills with our interactive assessment tool.
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">How it works:</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>You'll see a series of words with accompanying images.</li>
              <li>Click "Start Recording" and pronounce the word clearly.</li>
              <li>Use "Retake" if you want to try again.</li>
              <li>Click "Next Word" to continue to the next word.</li>
              <li>At the end, you'll receive your results and can download a report.</li>
            </ol>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Tips for success:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Speak clearly and at a normal pace.</li>
              <li>Try to pronounce each sound in the word.</li>
              <li>Don't worry about making mistakes - this is a learning process!</li>
            </ul>
          </div>
          <Button onClick={onStart} className="w-full">
            Start Assessment
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

