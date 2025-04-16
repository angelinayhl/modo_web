"use client"

export default function SupportedBy() {
  return (
    <section className="py-12 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-secondary">
            Supported <span className="text-primary">By</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Our program is developed in collaboration with Stanford's leading innovation and education centers
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="w-full md:w-auto flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-d-school.jpg-Dw3fKUPDZtfoWu7BCrEEwZR2iz3PH2.webp"
              alt="Hasso Plattner Institute of Design at Stanford (d.school)"
              className="h-20 md:h-24 object-contain"
            />
          </div>
          <div className="w-full md:w-auto flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Launchpad_Logo-02-6MLZLUdrd1Aa7lQtgSdGWPEYL96m88.png"
              alt="Stanford Launchpad"
              className="h-20 md:h-24 object-contain"
            />
          </div>
          <div className="w-full md:w-auto flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sal_logo_800p-nsbT0EwV6qWRft2OHd6eT4scgUQUla.png"
              alt="Stanford Accelerator for Learning"
              className="h-20 md:h-24 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
