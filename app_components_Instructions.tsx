import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface InstructionsProps {
  onClose: () => void
}

export default function Instructions({ onClose }: InstructionsProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">How to Use This App</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Welcome to the Speech Misarticulation Detection app! Here's a quick guide:</p>
          <ol className="list-decimal list-inside space-y-2">
            <li>You'll see a series of words with images.</li>
            <li>Click "Start Recording" and pronounce the word clearly.</li>
            <li>If needed, use "Retake" to try again.</li>
            <li>Click "Next Word" to continue.</li>
            <li>At the end, you'll see your results and can download a report.</li>
          </ol>
          <p>Remember, practice makes perfect! Take your time and enjoy learning.</p>
          <Button onClick={onClose} className="w-full">Start Practice</Button>
        </CardContent>
      </Card>
    </div>
  )
}

