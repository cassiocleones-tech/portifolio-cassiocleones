import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function NR12Training() {
  const activities = [
    {
      title: "Termo de Compromisso, Sigilo e Confidencialidade",
      description: "Assinados antes do início das atividades"
    },
    {
      title: "Cálculo de Multas - NR 28",
      description: "Como métrica financeira do projeto"
    },
    {
      title: "Controle de Documentação NR-12",
      description: "Levantamento e salvamento dos certificados dos dispositivos de segurança instalados"
    },
    {
      title: "Placa com Dados do Equipamento e QR-Code",
      description: "Para acesso aos relatórios fabricada em material resistente ao ambiente"
    },
    {
      title: "Planos de Ações e Resumo Executivo",
      description: "Não conformidades, Prioridades de Adequação, Inventário de Máquinas, Checklists de NR-10 e NR-12"
    },
    {
      title: "Análise de Riscos",
      description: "Combinação da especificação dos limites da máquina, identificação de perigos e estimativa de riscos"
    },
    {
      title: "Avaliação De Riscos",
      description: "Julgamento com base na Análise de Riscos, do quanto os objetivos de redução de riscos foram atingidos"
    },
    {
      title: "Apreciação De Riscos",
      description: "Processo completo que compreende a Análise de Riscos e a Avaliação de Riscos"
    },
    {
      title: "Laudo Técnico de Adequação de Segurança",
      description: "Com sugestões para correções após a apreciação dos riscos"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Voltar</span>
            </a>
          </Link>
          <h1 className="text-xl font-bold text-primary">Treinamentos NR-12</h1>
          <div className="w-16"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12">
        <div className="container max-w-4xl">
          {/* Introduction */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-lg border">
              <h2 className="text-3xl font-bold mb-4">Análise de Riscos NR-12</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Capacitação especializada em segurança de máquinas e equipamentos conforme Norma Regulamentadora NR-12
              </p>
              <p className="text-base text-muted-foreground mb-6">
                Possuímos mais de 10 anos de experiência em análises, projetos, manutenção e instalação de máquinas 
                e equipamentos adequados à NR-12, buscando acima de tudo a satisfação do cliente, nosso maior desafio 
                é atender as exigências de mercado sempre buscando trazer um produto de baixo custo para que qualquer 
                nível empresarial possa buscar sua solução conosco.
              </p>
              <p className="text-base text-muted-foreground">
                Nossa missão é desenvolver para o mercado da região nordeste análises e projetos com qualidade, 
                segurança e ergonomia, com um preço justo, do pequeno empresário à grande empresa.
              </p>
            </div>
          </section>

          {/* Description of Activities */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Descrição Das Atividades</h3>
            <p className="text-muted-foreground mb-6">
              Seu serviço exclusivo contará com:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {activities.map((activity, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{activity.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Pacotes de Serviço</h3>
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle>Pacote até 10 Máquinas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Análise completa + Avaliação (Apreciação de Riscos) e Laudo de análise de riscos NR-12
                </p>
                <Button size="lg" className="w-full" asChild>
                  <a
                    href="https://cassiocleones.kpages.online/devoenaonego"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Solicitar Orçamento
                  </a>
                </Button>
              </CardContent>
            </Card>
          </section>

          {/* Gautica Partnership */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Parceria Gautica</h3>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6">
                  Somos parceiros oficiais da Gautica, plataforma líder em gestão de NR-12. 
                  Utilizamos a metodologia Ágil para entrega do projeto com a mais alta qualidade.
                </p>
                <Button size="lg" className="w-full" asChild>
                  <a
                    href="https://gautica.com/?fyd=MzgyMDg="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Acessar Plataforma Gautica
                  </a>
                </Button>
              </CardContent>
            </Card>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg border text-center">
            <h3 className="text-2xl font-bold mb-4">Pronto para Começar?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Entre em contato conosco para discutir suas necessidades de conformidade NR-12 
              e receber um orçamento personalizado.
            </p>
            <Button size="lg" asChild>
              <a href="/#contato">
                Solicitar Informações
              </a>
            </Button>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted/30 mt-12">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Cassio Cleones. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
