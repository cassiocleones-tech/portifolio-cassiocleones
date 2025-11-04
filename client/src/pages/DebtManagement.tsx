import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, ShoppingCart } from "lucide-react";
import { Link } from "wouter";

export default function DebtManagement() {
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
          <h1 className="text-xl font-bold text-primary">Gestão Ágil de Dívidas</h1>
          <div className="w-16"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12">
        <div className="container max-w-4xl">
          {/* Banner Section */}
          <section className="mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Ebook Image */}
              <div className="flex justify-center">
                <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <img
                    src="/ebook-devedor-agil.png"
                    alt="O Devedor Ágil - Ebook"
                    className="w-full h-auto max-w-sm rounded"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4">O Devedor Ágil</h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    Como Aproveitar a Black Friday para Quitar Dívidas, Adquirir Conhecimento e Melhorar sua Saúde
                  </p>
                  <p className="text-base text-muted-foreground">
                    Descubra metodologias ágeis aplicadas à gestão de dívidas e transforme sua relação com o dinheiro. 
                    Este ebook apresenta estratégias práticas para otimizar suas finanças pessoais e empresariais.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Button size="lg" className="w-full" asChild>
                    <a
                      href="https://pay.hotmart.com/T102723791I"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Comprar Ebook na Hotmart
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="w-full" asChild>
                    <a
                      href="https://cassiocleones.kpages.online/devoenaonego"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Saiba Mais sobre o Treinamento Completo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Info Cards */}
          <section className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Metodologia Ágil</h3>
                <p className="text-sm text-muted-foreground">
                  Aplicação de práticas ágeis para gestão eficiente de dívidas e finanças.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Estratégias Práticas</h3>
                <p className="text-sm text-muted-foreground">
                  Técnicas comprovadas para quitação de dívidas e otimização financeira.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Suporte Especializado</h3>
                <p className="text-sm text-muted-foreground">
                  Consultoria e acompanhamento para implementação das metodologias.
                </p>
              </CardContent>
            </Card>
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
