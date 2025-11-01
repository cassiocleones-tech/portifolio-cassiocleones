import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  results?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Treinamento NR-12 - Indústria Metalúrgica",
    description: "Capacitação completa de 45 colaboradores em segurança de máquinas e equipamentos conforme NR-12.",
    image: "/project1.jpg",
    category: "NR-12",
    results: "Zero acidentes em 24 meses | 100% de conformidade"
  },
  {
    id: 2,
    title: "Implementação Gestão Ágil - Empresa de Tecnologia",
    description: "Transformação de processos utilizando metodologia Scrum, aumentando produtividade da equipe em 35%.",
    image: "/project2.jpg",
    category: "Gestão Ágil",
    results: "35% aumento de produtividade | 40% redução de prazos"
  },
  {
    id: 3,
    title: "Desenvolvimento App IA - Gestão de Manutenção",
    description: "Aplicativo inteligente para previsão de manutenção preventiva utilizando machine learning.",
    image: "/project3.jpg",
    category: "IA",
    results: "30% redução de custos | Downtime reduzido em 45%"
  },
  {
    id: 4,
    title: "Inspeção Elétrica Completa - Complexo Industrial",
    description: "Inspeção técnica de 3 unidades fabris com termografia infravermelha e análise de conformidade.",
    image: "/project4.jpg",
    category: "Inspeção Elétrica",
    results: "87 não conformidades identificadas | 100% corrigidas"
  },
  {
    id: 5,
    title: "Adequação NR-12 - Linha de Produção",
    description: "Implementação de proteções de segurança em 28 máquinas com treinamento de operadores.",
    image: "/project5.jpg",
    category: "NR-12",
    results: "Conformidade total | Certificação obtida"
  },
  {
    id: 6,
    title: "Sistema IoT de Monitoramento Industrial",
    description: "Implementação de sensores e IA para monitoramento em tempo real de equipamentos críticos.",
    image: "/project6.jpg",
    category: "IA",
    results: "Monitoramento 24/7 | Alertas automáticos"
  }
];

export default function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState<string>("Todos");

  const categories = ["Todos", ...Array.from(new Set(projects.map(p => p.category)))];
  
  const filteredProjects = filter === "Todos" 
    ? projects 
    : projects.filter(p => p.category === filter);

  const handlePrevious = () => {
    const index = projects.findIndex(p => p.id === selectedProject?.id);
    if (index > 0) {
      setSelectedProject(projects[index - 1]);
      setCurrentIndex(index - 1);
    }
  };

  const handleNext = () => {
    const index = projects.findIndex(p => p.id === selectedProject?.id);
    if (index < projects.length - 1) {
      setSelectedProject(projects[index + 1]);
      setCurrentIndex(index + 1);
    }
  };

  return (
    <div className="space-y-8">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              filter === category
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => {
              setSelectedProject(project);
              setCurrentIndex(projects.findIndex(p => p.id === project.id));
            }}
            className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden bg-muted">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-white/90 text-sm">{project.description}</p>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-4 bg-background">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-sm line-clamp-2">{project.title}</h3>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                  {project.category}
                </span>
                <span className="text-xs text-muted-foreground">Clique para ver mais</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
          {selectedProject && (
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image */}
              <div className="relative w-full h-96 bg-muted overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Navigation Buttons */}
              {currentIndex > 0 && (
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}
              {currentIndex < projects.length - 1 && (
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}

              {/* Content */}
              <div className="p-8 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
                    <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {selectedProject.category}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {currentIndex + 1} de {projects.length}
                  </span>
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  {selectedProject.description}
                </p>

                {selectedProject.results && (
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <h3 className="font-semibold text-primary mb-2">Resultados Alcançados</h3>
                    <p className="text-sm text-muted-foreground">
                      {selectedProject.results}
                    </p>
                  </div>
                )}

                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    💡 <strong>Dica:</strong> Você pode substituir essas imagens pelas suas próprias fotos de projetos reais. 
                    Entre em contato para atualizar a galeria com seus trabalhos.
                  </p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
