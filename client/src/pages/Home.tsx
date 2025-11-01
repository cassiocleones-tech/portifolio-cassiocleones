import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Shield, 
  TrendingDown,
  Mail, 
  Phone,
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      icon: <Code2 className="w-12 h-12" />,
      title: "Criar Aplicativos Web e Páginas de Portfólio Profissional",
      description: "Desenvolvimento de websites responsivos, aplicativos web modernos e portfólios profissionais personalizados para sua marca. Com aplicação de IA - Inteligência Artificial para otimização e automação.",
      image: "/area1.jpg"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Treinamentos NR-12 - Parceria Gautica",
      description: "Capacitação especializada em segurança de máquinas e equipamentos. Somos parceiros oficiais da Gautica, plataforma líder em gestão de NR-12. Com aplicação de IA - Inteligência Artificial para diagnóstico e conformidade.",
      image: "/area2.jpg",
      link: "https://gautica.com/Register/Register.aspx"
    },
    {
      icon: <TrendingDown className="w-12 h-12" />,
      title: "Gestão Ágil de Dívidas",
      description: "Consultoria e implementação de metodologias ágeis para gestão eficiente de dívidas e otimização financeira. Com aplicação de IA - Inteligência Artificial para análise e previsão.",
      image: "/area3.jpg",
      link: "https://cassiocleones.kpages.online/devoenaonego"
    }
  ];

  const galleryImages = [
    { id: 1, title: "Criar Aplicativos Web e Páginas de Portfólio Profissional", image: "/area1.jpg" },
    { id: 2, title: "Treinamentos NR-12 - Parceria Gautica", image: "/area2.jpg" },
    { id: 3, title: "Gestão Ágil de Dívidas", image: "/area3.jpg" }
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Cassio Cleones" className="h-10 w-10" />
              <div>
                <h1 className="text-xl font-bold text-primary">CASSIO CLEONES</h1>
                <p className="text-xs text-muted-foreground">Soluções Profissionais</p>
              </div>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#servicos" className="text-sm font-medium hover:text-primary transition-colors">Serviços</a>
            <a href="#projetos" className="text-sm font-medium hover:text-primary transition-colors">Areas de Atuacao</a>
            <a href="#contato" className="text-sm font-medium hover:text-primary transition-colors">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="text-sm px-4 py-1">
              Soluções Profissionais em Tecnologia e Segurança
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Transforme sua <span className="text-primary">Visão</span> em{" "}
              <span className="text-accent">Realidade</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Especialista em desenvolvimento web, treinamentos NR-12 e gestão ágil de dívidas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg" asChild>
                <a href="#contato">Entre em Contato</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg" asChild>
                <a href="#servicos">Conheça os Serviços</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-background">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Nossas Áreas de Atuação</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Três grandes áreas onde posso ajudar seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="text-primary bg-primary/10 p-3 rounded-lg">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                {service.link && (
                  <CardContent>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a 
                        href={service.link} 
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {service.title.includes("Gautica") ? "Teste Grátis Gautica" : "Saiba Mais"}
                      </a>
                    </Button>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery Section */}
      <section id="projetos" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Áreas de Atuação</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Gallery Carousel */}
            <div className="relative">
              <div 
                className="relative w-full h-96 bg-muted rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(galleryImages[currentIndex].image)}
              >
                <img
                  src={galleryImages[currentIndex].image}
                  alt={galleryImages[currentIndex].title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Indicators */}
              <div className="flex justify-center gap-2 mt-4">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Entre em Contato</h2>
              <p className="text-lg text-muted-foreground">
                Vamos conversar sobre como posso ajudar seu negócio
              </p>
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="pt-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">E-mail</h3>
                        <a 
                          href="mailto:cassiocleones@gmail.com" 
                          className="text-primary hover:underline"
                        >
                          cassiocleones@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-accent text-accent-foreground p-3 rounded-lg">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Telefone / WhatsApp</h3>
                        <a 
                          href="https://wa.me/5581988482955" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          (81) 98848-2955
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Horário de Atendimento</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>Segunda a Sexta: 8h às 18h</p>
                      <p>Sábado: 8h às 12h</p>
                    </div>
                    <div className="pt-4">
                      <Button className="w-full" size="lg" asChild>
                        <a 
                          href="https://wa.me/5581988482955?text=Olá! Gostaria de saber mais sobre os serviços." 
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          Chamar no WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Cassio Cleones" className="h-8 w-8" />
              <div>
                <p className="text-sm font-semibold">CASSIO CLEONES</p>
                <p className="text-xs text-muted-foreground">Soluções Profissionais</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Cassio Cleones. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh]">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Projeto"
              className="w-full h-full object-cover rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
