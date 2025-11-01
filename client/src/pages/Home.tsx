import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  Shield, 
  Zap, 
  Smartphone, 
  Mail, 
  Phone,
  Briefcase,
  Award,
  Users,
  TrendingUp,
  ExternalLink
} from "lucide-react";
import ProjectGallery from "@/components/ProjectGallery";

export default function Home() {
  const services = [
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Gestão Ágil de Projetos",
      description: "Implementação de metodologias ágeis para otimizar processos e aumentar a produtividade da sua equipe. Scrum, Kanban e frameworks personalizados para sua realidade.",
      features: ["Scrum & Kanban", "Sprint Planning", "Métricas de Performance"]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Treinamentos de NR-12",
      description: "Capacitação completa em segurança de máquinas e equipamentos conforme Norma Regulamentadora NR-12. Somos parceiros oficiais da Gautica, plataforma líder em gestão de NR-12.",
      features: ["Certificação NR-12", "Plataforma Gautica", "Conformidade Legal"],
      partner: true
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Criação de Aplicativos por IA",
      description: "Desenvolvimento de aplicativos personalizados utilizando inteligência artificial de última geração. Soluções inovadoras para automatizar e modernizar seu negócio.",
      features: ["IA Generativa", "Apps Customizados", "Automação Inteligente"]
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Inspeções Elétricas",
      description: "Inspeções técnicas detalhadas de instalações elétricas industriais e comerciais. Laudos técnicos, identificação de não conformidades e soluções preventivas.",
      features: ["Laudos Técnicos", "NR-10", "Manutenção Preventiva"]
    }
  ];

  const stats = [
    { icon: <Briefcase className="w-8 h-8" />, value: "50+", label: "Projetos Concluídos" },
    { icon: <Users className="w-8 h-8" />, value: "200+", label: "Profissionais Treinados" },
    { icon: <Award className="w-8 h-8" />, value: "100%", label: "Conformidade Legal" },
    { icon: <CheckCircle2 className="w-8 h-8" />, value: "15+", label: "Anos de Experiência" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Cassio Cleones" className="h-10 w-10" />
            <div>
              <h1 className="text-xl font-bold text-primary">CASSIO CLEONES</h1>
              <p className="text-xs text-muted-foreground">Industrial Safety & Technology Services</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#servicos" className="text-sm font-medium hover:text-primary transition-colors">Serviços</a>
            <a href="#projetos" className="text-sm font-medium hover:text-primary transition-colors">Projetos</a>
            <a href="#contato" className="text-sm font-medium hover:text-primary transition-colors">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="text-sm px-4 py-1">
              Soluções Profissionais em Segurança Industrial e Tecnologia
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Transforme sua <span className="text-primary">Segurança</span> e{" "}
              <span className="text-accent">Tecnologia</span> Industrial
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Com mais de 10 anos de experiência e mais de 5 projetos em grandes indústrias da região. 
              Especialista em Gestão Ágil, Treinamentos NR-12, Desenvolvimento de Aplicativos com IA e Inspeções Elétricas.
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

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6 space-y-2">
                  <div className="flex justify-center text-primary">{stat.icon}</div>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-background">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Serviços Especializados</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Soluções completas para segurança industrial, gestão de projetos e inovação tecnológica
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow relative">
                {service.partner && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent text-accent-foreground">Parceiro Gautica</Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="text-primary bg-primary/10 p-3 rounded-lg">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  {service.partner && (
                    <div className="pt-4 border-t">
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <a 
                          href="https://gautica.com/Register/Register.aspx" 
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Teste Grátis Gautica
                        </a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Projetos Anteriores</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Exemplos de trabalhos realizados com excelência e comprometimento
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <ProjectGallery />
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
                          href="https://wa.me/5581988482955?text=Olá! Gostaria de saber mais sobre os serviços da Industra Safe." 
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
                <p className="text-xs text-muted-foreground">Industrial Safety & Technology Services</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Cassio Cleones. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
