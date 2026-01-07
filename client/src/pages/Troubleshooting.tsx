import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowLeft
} from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

interface Problem {
  id: number;
  title: string;
  category: string;
  severity: "critica" | "alta" | "media" | "baixa";
  description: string;
  symptoms: string[];
  solutions: string[];
  caseStudy?: {
    title: string;
    description: string;
    result: string;
  };
}

export default function Troubleshooting() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [selectedSeverity, setSelectedSeverity] = useState<string | null>(null);

  const problems: Problem[] = [
    {
      id: 1,
      title: "Link Flapping em Switch Cisco SG300-10MP",
      category: "Conectividade",
      severity: "critica",
      description: "Porta de rede alternando constantemente entre up e down, causando instabilidade na conexão.",
      symptoms: [
        "Porta aparece como up/down alternadamente",
        "Perda de pacotes intermitente",
        "Desconexões frequentes de dispositivos conectados",
        "Logs mostrando eventos de link change"
      ],
      solutions: [
        "Verificar integridade do cabo de rede (testar com outro cabo)",
        "Limpar conectores RJ45 com álcool isopropílico",
        "Desabilitar e reabilitar a porta via Web UI ou CLI",
        "Verificar velocidade de negociação (auto vs. 100Mbps fixo)",
        "Atualizar firmware do switch para versão mais recente",
        "Se problema persistir, substituir módulo SFP ou porta"
      ],
      caseStudy: {
        title: "Website do POP Cisco SG300-10MP - Entregue com Sucesso!",
        description: "Construí um website profissional e interativo baseado no script de apresentação do procedimento. O site apresenta 8 slides navegáveis com design técnico moderno, sidebar fixa para fácil acesso, paleta azul-cinza-branco corporativa.",
        result: "Estabilização completa da porta após aplicação das soluções. Documentação técnica disponível para referência futura."
      }
    },
    {
      id: 2,
      title: "Falha na Autenticação NR-12",
      category: "Segurança",
      severity: "alta",
      description: "Usuários não conseguem autenticar em sistemas com certificado NR-12.",
      symptoms: [
        "Erro de autenticação ao acessar sistema",
        "Certificado expirado ou inválido",
        "Rejeição de credenciais válidas",
        "Logs indicando falha de validação"
      ],
      solutions: [
        "Verificar data/hora do servidor (sincronizar com NTP)",
        "Validar certificado digital (verificar validade e assinatura)",
        "Regenerar certificado se expirado",
        "Limpar cache de autenticação do cliente",
        "Verificar permissões de acesso no banco de dados",
        "Consultar logs de auditoria para rastrear tentativas"
      ]
    },
    {
      id: 3,
      title: "Integração com Gautica Não Funciona",
      category: "Integração",
      severity: "media",
      description: "Problemas ao conectar com plataforma Gautica para gestão de NR-12.",
      symptoms: [
        "Erro de conexão ao plataforma Gautica",
        "Dados não sincronizam corretamente",
        "Timeout na requisição",
        "Chave de API inválida"
      ],
      solutions: [
        "Verificar chave de API (copiar novamente do painel Gautica)",
        "Confirmar URL da API está correta: https://gautica.com/api",
        "Testar conectividade com ferramentas como curl ou Postman",
        "Verificar firewall e proxy (porta 443 liberada)",
        "Validar certificado SSL do servidor Gautica",
        "Contatar suporte Gautica se problema persistir"
      ]
    },
    {
      id: 4,
      title: "Gestão de Dívidas - Sincronização Falha",
      category: "Dados",
      severity: "media",
      description: "Dados de gestão de dívidas não sincronizam entre módulos.",
      symptoms: [
        "Saldos inconsistentes entre telas",
        "Histórico de transações incompleto",
        "Relatórios mostram valores diferentes",
        "Erro ao exportar dados"
      ],
      solutions: [
        "Executar sincronização manual do banco de dados",
        "Verificar integridade do banco de dados (backup/restore)",
        "Limpar cache de aplicação",
        "Verificar permissões de acesso ao banco de dados",
        "Analisar logs de erro para identificar transação problemática",
        "Se necessário, reprocessar período específico"
      ]
    },
    {
      id: 5,
      title: "Performance Lenta em Aplicativos Web",
      category: "Performance",
      severity: "alta",
      description: "Aplicativos web desenvolvidos carregam lentamente ou ficam travados.",
      symptoms: [
        "Tempo de carregamento acima de 5 segundos",
        "Interface congelada durante operações",
        "Alto uso de CPU/memória",
        "Erros de timeout"
      ],
      solutions: [
        "Analisar performance com Chrome DevTools (Network/Performance)",
        "Otimizar imagens (compressão, lazy loading)",
        "Minificar CSS/JavaScript",
        "Implementar cache (browser cache, CDN)",
        "Verificar queries de banco de dados (usar índices)",
        "Aumentar recursos do servidor se necessário",
        "Implementar paginação para grandes volumes de dados"
      ]
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critica":
        return "bg-red-100 text-red-800";
      case "alta":
        return "bg-orange-100 text-orange-800";
      case "media":
        return "bg-yellow-100 text-yellow-800";
      case "baixa":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const severityOptions = [
    { value: null, label: "Todos", count: problems.length },
    { value: "critica", label: "Crítica", count: problems.filter(p => p.severity === "critica").length },
    { value: "alta", label: "Alta", count: problems.filter(p => p.severity === "alta").length },
    { value: "media", label: "Média", count: problems.filter(p => p.severity === "media").length },
    { value: "baixa", label: "Baixa", count: problems.filter(p => p.severity === "baixa").length }
  ];

  const filteredProblems = selectedSeverity 
    ? problems.filter(p => p.severity === selectedSeverity)
    : problems;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/">
              <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm font-medium">Voltar</span>
              </a>
            </Link>
          </div>
          <h1 className="text-xl font-bold text-primary">Soluções de Problemas</h1>
          <div className="w-16" />
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Intro Section */}
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Troubleshooting & Soluções</h2>
            <p className="text-lg text-muted-foreground">
              Encontre soluções para problemas comuns em nossos serviços
            </p>
          </div>

          {/* Filter Section */}
          <div className="mb-8 p-4 bg-muted/50 rounded-lg">
            <h3 className="text-sm font-semibold mb-4">Filtrar por Severidade:</h3>
            <div className="flex flex-wrap gap-2">
              {severityOptions.map((option) => (
                <button
                  key={option.value || "todos"}
                  onClick={() => setSelectedSeverity(option.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedSeverity === option.value
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-background border border-border hover:border-primary"
                  }`}
                >
                  {option.label}
                  <span className="ml-2 text-xs opacity-70">({option.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Problems List */}
          <div className="space-y-4">
            {filteredProblems.length > 0 ? (
              filteredProblems.map((problem) => (
              <Card 
                key={problem.id}
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setExpandedId(expandedId === problem.id ? null : problem.id)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-3">
                        <AlertCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <CardTitle className="text-lg">{problem.title}</CardTitle>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant="outline">{problem.category}</Badge>
                        <Badge className={getSeverityColor(problem.severity)}>
                          Severidade: {problem.severity}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      {expandedId === problem.id ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </div>
                </CardHeader>

                {expandedId === problem.id && (
                  <CardContent className="space-y-6 border-t pt-6">
                    {/* Description */}
                    <div>
                      <h3 className="font-semibold mb-2">Descrição</h3>
                      <p className="text-muted-foreground">{problem.description}</p>
                    </div>

                    {/* Symptoms */}
                    <div>
                      <h3 className="font-semibold mb-3">Sintomas</h3>
                      <ul className="space-y-2">
                        {problem.symptoms.map((symptom, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <span className="text-primary mt-1">•</span>
                            <span>{symptom}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                      <h3 className="font-semibold mb-3">Soluções Recomendadas</h3>
                      <ol className="space-y-2">
                        {problem.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm">
                            <span className="font-semibold text-primary flex-shrink-0 min-w-6">
                              {idx + 1}.
                            </span>
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Case Study */}
                    {problem.caseStudy && (
                      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 space-y-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm">{problem.caseStudy.title}</h4>
                            <p className="text-xs text-muted-foreground mt-1">
                              {problem.caseStudy.description}
                            </p>
                            <p className="text-xs font-medium text-green-700 mt-2">
                              ✓ {problem.caseStudy.result}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                )}
              </Card>
              ))
            ) : (
              <div className="text-center py-12">
                <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Nenhum problema encontrado com essa severidade.</p>
              </div>
            )}
          </div>

          {/* Contact Section */}
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="pt-8">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold">Não encontrou sua solução?</h3>
                <p className="text-muted-foreground">
                  Entre em contato conosco para suporte especializado
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild>
                    <a href="https://wa.me/5581988482955" target="_blank" rel="noopener noreferrer">
                      Contatar via WhatsApp
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="mailto:cassiocleones@gmail.com">
                      Enviar Email
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
