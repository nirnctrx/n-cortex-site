import { RadarWaves } from "@/components/radar-waves"
import { Button } from "@/components/ui/button"
import { ArrowRight, Radio, Zap, Lock } from "lucide-react"

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Animated background waves */}
      <RadarWaves />

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 lg:px-12">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
            <Radio className="h-5 w-5 text-primary" />
          </div>
          <span className="font-mono text-xl font-bold tracking-tight">N-CORTEX</span>
        </div>
        <Button variant="ghost" size="sm" className="font-mono text-xs">
          CONTACT
        </Button>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 mx-auto max-w-6xl px-6 py-20 lg:px-12 lg:py-32">
        <div className="space-y-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-mono backdrop-blur-sm">
            <Lock className="h-3 w-3 text-primary" />
            <span className="text-primary">STEALTH MODE</span>
          </div>

          {/* Heading */}
          <h1 className="text-balance font-sans text-5xl font-bold leading-tight tracking-tight lg:text-7xl">
            Next-generation
            <br />
            <span className="text-primary">mmWave radar</span>
            <br />
            intelligence
          </h1>

          {/* Description */}
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground lg:text-xl">
            Pioneering millimeter wave radar technology for autonomous drones and advanced robotics. Precision sensing
            at the speed of light.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
            <Button size="lg" className="group font-mono">
              JOIN WAITLIST
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="font-mono bg-transparent">
              LEARN MORE
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-32 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-colors hover:border-primary/50">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Radio className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 font-mono text-lg font-semibold">mmWave Precision</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Advanced millimeter wave radar for unparalleled detection accuracy in any environment.
            </p>
          </div>

          <div className="group rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-colors hover:border-primary/50">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 font-mono text-lg font-semibold">Real-time Processing</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Instantaneous signal processing for critical autonomous decision-making systems.
            </p>
          </div>

          <div className="group rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-colors hover:border-primary/50 sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 font-mono text-lg font-semibold">Real-time Drift Analysis</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Finally, an architecture that quantifies drift in real-time. Turn every deviation into actionable data.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border px-6 py-8 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-mono text-xs text-muted-foreground">© 2026 N-Cortex. All rights reserved.</p>
          <div className="flex gap-6 font-mono text-xs text-muted-foreground">
            <a href="mailto:info@n-cortex.com" className="transition-colors hover:text-primary">
              info@n-cortex.com
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
