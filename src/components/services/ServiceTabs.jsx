import React, { useState } from 'react';
import { FaCar, FaCarSide, FaSprayCan, FaTools, FaPlus, FaMotorcycle, FaWater } from 'react-icons/fa';

const ServiceTabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const tabs = [
    { id: 'tab1', label: 'Lavagens Básicas', icon: <FaCar className="mr-2" /> },
    { id: 'tab2', label: 'Lavagens Premium', icon: <FaCarSide className="mr-2" /> },
    { id: 'tab3', label: 'Serviço Detalhado', icon: <FaSprayCan className="mr-2" /> },
    { id: 'tab4', label: 'Pacote HL', icon: <FaTools className="mr-2" /> },
    { id: 'tab5', label: 'Serviços Adicionais', icon: <FaPlus className="mr-2" /> },
  ];

  // Dados das tabelas de serviços
  const serviceData = {
    // Lavagens Básicas
    tab1: [
      {
        tipo: 'Lavagem Simples',
        itens: [
          { descricao: 'Lavagem Externa (com Shampoo Automotivo)', p: '60,00', m: '70,00', g: '80,00' },
          { descricao: 'Limpeza de Painel + Entradas de Portas (Forrações)', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Aspiração completa (Remoção de Pelos sob consulta)', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Limpeza dos Vidros', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Pretinho dos Pneus', p: 'Incluído', m: 'Incluído', g: 'Incluído' }
        ]
      },
      {
        tipo: 'Lavagem Completa',
        itens: [
          { descricao: 'Lavagem Externa (com Shampoo Automotivo)', p: '80,00', m: '90,00', g: '100,00' },
          { descricao: 'Limpeza de Painel + Entradas de Portas (Forrações)', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Aspiração completa (Remoção de Pelos sob consulta)', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Pretinho dos Pneus', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Cera em Pasta (Duração 60 dias)', p: 'Incluído', m: 'Incluído', g: 'Incluído' }
        ]
      },
      {
        tipo: 'Lavagem Completa 2',
        itens: [
          { descricao: 'Lavagem Externa (com Shampoo Automotivo)', p: '90,00', m: '100,00', g: '110,00' },
          { descricao: 'Limpeza de Painel + Entradas de Portas (Forrações)', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Aspiração completa (Remoção de Pelos sob consulta)', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Pretinho dos Pneus', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Selante de Pintura (Duração 60-120 dias)', p: 'Incluído', m: 'Incluído', g: 'Incluído' }
        ]
      }
    ],
    // Lavagens Premium
    tab2: [
      {
        tipo: 'Lavagem Premium',
        itens: [
          { descricao: 'Pré Lavagem profunda', p: '290,00', m: '290,00', g: '340,00' },
          { descricao: 'Descontaminação Química', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Limpeza profunda de Painéis e Laterais', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Limpeza de Vidros', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Limpeza detalhada de Cantos, Emblemas e Frisos', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Condicionamento de Plásticos internos e externos', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Selagem dos Pneus', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Selante de pintura SIO2-PRO (durabilidade até 4 meses)', p: 'Incluído', m: 'Incluído', g: 'Incluído' }
        ]
      },
      {
        tipo: 'Lavagem Master',
        itens: [
          { descricao: 'Pré Lavagem profunda', p: '360,00', m: '360,00', g: '400,00' },
          { descricao: 'Descontaminação Química', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Limpeza profunda de Painéis e Laterais', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Limpeza de Vidros', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Limpeza detalhada de Cantos, Emblemas e Frisos', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Condicionamento de Plásticos internos e externos', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Selagem dos Pneus', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Selante MOTHERS CMX (durabilidade até 6 meses)', p: 'Incluído', m: 'Incluído', g: 'Incluído' }
        ]
      }
    ],
    // Serviço Detalhado
    tab3: [
      {
        tipo: 'Serviço Detalhado',
        itens: [
          { descricao: 'Pré lavagem', p: '400,00', m: '450,00', g: '500,00' },
          { descricao: 'Descontaminação química da pintura', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Aspiração profunda', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Limpeza e Condicionamento das Caixas de Roda', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Limpeza detalhada dos Emblemas, Cantos e Frisos', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Remoção de Piche', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Descontaminação com Claybar', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Descontaminação Ferrosa das Rodas', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Selagem dos Pneus', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Limpeza dos Plásticos Internos com Bactericida', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Cristalização Pára-brisas (90% Visibilidade, 3 meses)', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Limpeza do Cofre do Motor', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Cera em pasta BLEND (durabilidade 6 meses)', p: 'Incluído', m: 'Incluído', g: 'Incluído' }
        ]
      },
      {
        tipo: 'Tratamento Gold (Higienização Full + Lavagem Técnica)',
        itens: [
          { descricao: 'Limpeza técnica externa', p: '1.390,00', m: '1.390,00', g: '1.590,00' },
          { descricao: 'Descontaminação Ferrosa das Rodas', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Limpeza dos Plásticos Internos com Bactericida', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Revitalização dos Plásticos Internos e Externos', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Hidratação do Couro (se possuir)', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Cristalização Pára-brisas (90% Visibilidade, 3 meses)', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Lavagem do Cofre do Motor', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Selante de Pintura (durabilidade 4 meses)', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Lavagem Técnica externa', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Higienização Full no interior', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Higienização de Bancos', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Higienização do Teto, Painel, laterais de Porta, Cintos e Carpete', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Oxi-Sanitização com Ozônio (sob consulta)', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Selante de Pintura MOTHERS CMX (durabilidade 6 meses)', p: 'Incluído', m: 'Incluído', g: 'Incluído' }
        ]
      }
    ],
    // Pacote HL
    tab4: [
      {
        tipo: 'Pacote HL',
        itens: [
          { descricao: 'Lavagem Técnica', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Higienização Full', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Descontaminações', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Remoção de Piche', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Descontaminação com Claybar', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Descontaminação Ferrosa das Rodas', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Polimento Técnico', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Cristalização Pára-brisas (90% Visibilidade, 3 meses)', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Lavagem do Cofre do Motor', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Polimento Técnico', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Vitrificação de Pintura (Durabilidade 12 meses)', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Oxi-Sanitização com Ozônio', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Garantia de 12 meses', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Preço', p: '2.990,00', m: '3.290,00', g: '3.590,00' }
        ]
      },
      {
        tipo: 'Pacote HL + Limpeza de Bico Injetor',
        itens: [
          { descricao: 'Tudo do Pacote HL +', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Limpeza de Bico Injetor', p: 'Incluído', m: 'Incluído', g: 'Incluído' },
          { descricao: 'Preço', p: '3.490,00', m: '3.790,00', g: '4.090,00' }
        ]
      }
    ],
    // Serviços Adicionais
    tab5: [
      {
        tipo: 'Serviços Adicionais',
        itens: [
          { descricao: 'Higienização de Ar Condicionado', p: '250,00', m: '250,00', g: '250,00' },
          { descricao: 'Lavagem de Motor', p: '150,00', m: '150,00', g: '150,00' },
          { descricao: 'Lavagem de Teto', p: '200,00', m: '250,00', g: '300,00' },
          { descricao: 'Lavagem de Painel', p: '150,00', m: '150,00', g: '150,00' },
          { descricao: 'Lavagem de Banco', p: '150,00', m: '150,00', g: '150,00' },
          { descricao: 'Lavagem de Porta Malas', p: '150,00', m: '150,00', g: '150,00' },
          { descricao: 'Lavagem de Carpete', p: '150,00', m: '150,00', g: '150,00' },
          { descricao: 'Lavagem de Estofados', p: '200,00', m: '250,00', g: '300,00' },
          { descricao: 'Lavagem de Tapetes', p: '100,00', m: '100,00', g: '100,00' },
          { descricao: 'Lavagem de Cintos', p: '100,00', m: '100,00', g: '100,00' },
          { descricao: 'Lavagem de Rodas', p: '80,00', m: '80,00', g: '80,00' },
          { descricao: 'Lavagem de Rodas Aro 17"', p: '100,00', m: '100,00', g: '100,00' },
          { descricao: 'Lavagem de Rodas Aro 18"', p: '120,00', m: '120,00', g: '120,00' },
          { descricao: 'Lavagem de Rodas Aro 20"', p: '150,00', m: '150,00', g: '150,00' },
          { descricao: 'Lavagem de Rodas Aro 22"', p: '200,00', m: '200,00', g: '200,00' },
          { descricao: 'Lavagem de Rodas Aro 24"', p: '250,00', m: '250,00', g: '250,00' },
          { descricao: 'Lavagem de Rodas Aro 26"', p: '300,00', m: '300,00', g: '300,00' },
          { descricao: 'Limpeza de Bico Injetor', p: '500,00', m: '500,00', g: '500,00' },
          { descricao: 'Limpeza de Bico Injetor + Troca de Óleo', p: '600,00', m: '600,00', g: '600,00' },
          { descricao: 'Limpeza de Bico Injetor + Troca de Óleo + Filtros', p: '700,00', m: '700,00', g: '700,00' },
          { descricao: 'Troca de Óleo', p: '100,00', m: '100,00', g: '100,00' },
          { descricao: 'Troca de Filtro de Ar', p: '50,00', m: '50,00', g: '50,00' },
          { descricao: 'Troca de Filtro de Ar Condicionado', p: '50,00', m: '50,00', g: '50,00' },
          { descricao: 'Troca de Filtro de Combustível', p: '50,00', m: '50,00', g: '50,00' },
          { descricao: 'Troca de Filtro de Óleo', p: '50,00', m: '50,00', g: '50,00' },
          { descricao: 'Troca de Vela', p: '50,00', m: '50,00', g: '50,00' },
          { descricao: 'Troca de Pastilha de Freio', p: '100,00', m: '100,00', g: '100,00' },
          { descricao: 'Troca de Disco de Freio', p: '150,00', m: '150,00', g: '150,00' },
          { descricao: 'Troca de Lâmpada', p: '30,00', m: '30,00', g: '30,00' },
          { descricao: 'Troca de Bateria', p: '50,00', m: '50,00', g: '50,00' },
          { descricao: 'Troca de Correia Dentada', p: '200,00', m: '200,00', g: '200,00' },
          { descricao: 'Troca de Correia Alternador', p: '100,00', m: '100,00', g: '100,00' },
          { descricao: 'Troca de Correia de Ar Condicionado', p: '100,00', m: '100,00', g: '100,00' },
          { descricao: 'Troca de Correia de Direção Hidráulica', p: '100,00', m: '100,00', g: '100,00' },
          { descricao: 'Troca de Correia de Comando', p: '200,00', m: '200,00', g: '200,00' },
          { descricao: 'Troca de Amortecedor', p: '200,00', m: '200,00', g: '200,00' },
          { descricao: 'Troca de Mola', p: '200,00', m: '200,00', g: '200,00' },
          { descricao: 'Troca de Bandeja', p: '200,00', m: '200,00', g: '200,00' },
          { descricao: 'Troca de Bieleta', p: '100,00', m: '100,00', g: '100,00' },
          { descricao: 'Troca de Pivô', p: '100,00', m: '100,00', g: '100,00' },
          { descricao: 'Troca de Terminal de Direção', p: '100,00', m: '100,00', g: '100,00' },
          { descricao: 'Troca de Coxim de Motor', p: '200,00', m: '200,00', g: '200,00' },
          { descricao: 'Troca de Coxim de Câmbio', p: '200,00', m: '200,00', g: '200,00' },
          { descricao: 'Troca de Bux', p: '100,00', m: '100,00', g: '100,00' },
          { descricao: 'Troca de Bux de Roda', p: '100,00', m: '100,00', g: '100,00' },
          { descricao: 'Troca de Bux de Suspensão', p: '100,00', m: '100,00', g: '100,00' },
          { descricao: 'Troca de Bux de Barra Estabilizadora', p: '100,00', m: '100,00', g: '100,00' },
          { descricao: 'Troca de Bux de Bandeja', p: '100,00', m: '100,00', g: '100,00' },
          { descricao: 'Troca de Bux de Amortecedor', p: '100,00', m: '100,00', g: '100,00' },
          { descricao: 'Troca de Bux de Pivô', p: '100,00', m: '100,00', g: '100,00' },
          { descricao: 'Troca de Bux de Terminal', p: '100,00', m: '100,00', g: '100,00' },
          { descricao: 'Troca de Bux de Barra de Direção', p: '100,00', m: '100,00', g: '100,00' },
          { descricao: 'Troca de Bux de Barra Estabilizadora', p: '100,00', m: '100,00', g: '100,00' },
          { descricao: 'Troca de Bux de Barra de Torção', p: '100,00', m: '100,00', g: '100,00' },
          { descricao: 'Troca de Bux de Barra Panhard', p: '100,00', m: '100,00', g: '100,00' },
          { descricao: 'Troca de Bux de Barra de Apoio', p: '100,00', m: '100,00', g: '100,00' },
          { descricao: 'Troca de Bux de Barra de Estabilidade', p: '100,00', m: '100,00', g: '100,00' },
          { descricao: 'Troca de Bux de Barra de Torção', p: '100,00', m: '100,00', g: '100,00' },
          { descricao: 'Troca de Bux de Barra de Apoio', p: '100,00', m: '100,00', g: '100,00' },
          { descricao: 'Troca de Bux de Barra de Estabilidade', p: '100,00', m: '100,00', g: '100,00' },
          { descricao: 'Troca de Bux de Barra de Torção', p: '100,00', m: '100,00', g: '100,00' },
          { descricao: 'Troca de Bux de Barra de Apoio', p: '100,00', m: '100,00', g: '100,00' },
          { descricao: 'Troca de Bux de Barra de Estabilidade', p: '100,00', m: '100,00', g: '100,00' },
          { descricao: 'Troca de Bux de Barra de Torção', p: '100,00', m: '100,00', g: '100,00' },
          { descricao: 'Troca de Bux de Barra de Apoio', p: '100,00', m: '100,00', g: '100,00' },
          { descricao: 'Troca de Bux de Barra de Estabilidade', p: '100,00', m: '100,00', g: '100,00' }
        ]
      }
    ]
  };

  return (
    <div className="service-tabs-container">
      <div className="flex flex-wrap justify-center mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex items-center px-4 py-2 mx-1 mb-2 rounded-t-lg transition-colors ${
              activeTab === tab.id
                ? 'bg-gold-600 text-white'
                : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-content bg-gray-800 p-6 rounded-lg shadow-lg">
        {['tab1', 'tab2', 'tab3', 'tab4', 'tab5'].map((tabId) => (
          <div key={tabId} className={activeTab === tabId ? 'block' : 'hidden'}>
            <div className="space-y-8">
              {serviceData[tabId].map((servico, idx) => (
                <div key={idx} className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-gold-400">{servico.tipo}</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-gray-900 rounded-lg overflow-hidden">
                      <thead>
                        <tr className="bg-gold-600 text-white">
                          <th className="px-4 py-2 text-left">Descrição</th>
                          <th className="px-4 py-2">P (R$)</th>
                          <th className="px-4 py-2">M (R$)</th>
                          <th className="px-4 py-2">G (R$)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {servico.itens.map((item, index) => (
                          <tr 
                            key={index} 
                            className={`${index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-750'} hover:bg-gray-700 transition-colors`}
                          >
                            <td className="px-4 py-3 border-b border-gray-700">{item.descricao}</td>
                            <td className="px-4 py-3 border-b border-gray-700 text-center">{item.p}</td>
                            <td className="px-4 py-3 border-b border-gray-700 text-center">{item.m}</td>
                            <td className="px-4 py-3 border-b border-gray-700 text-center">{item.g}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceTabs;
