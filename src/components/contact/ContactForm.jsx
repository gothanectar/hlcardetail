import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane, FaCheck, FaExclamationTriangle, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

// Serviços disponíveis para seleção no formulário
const SERVICES = [
  { id: 'lavagem-basica', name: 'Lavagem Básica' },
  { id: 'lavagem-premium', name: 'Lavagem Premium' },
  { id: 'polimento', name: 'Polimento' },
  { id: 'vitrificacao', name: 'Vitrificação' },
  { id: 'higienizacao', name: 'Higienização Interna' },
  { id: 'outro', name: 'Outro Serviço' },
];

// Animação para os itens do formulário
const formItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: 'easeOut'
    }
  })
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });
  const [isMounted, setIsMounted] = useState(false);
  
  // Efeito para animação de entrada
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);
  
  const validateField = (name, value) => {
    let error = '';
    
    switch (name) {
      case 'name':
        if (!value.trim()) error = 'O nome é obrigatório';
        else if (value.trim().length < 3) error = 'O nome deve ter pelo menos 3 caracteres';
        break;
      case 'email':
        if (!value) error = 'O e-mail é obrigatório';
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          error = 'E-mail inválido';
        }
        break;
      case 'phone':
        if (!value) error = 'O telefone é obrigatório';
        else if (!/^\(?[1-9]{2}\)?[0-9]{4,5}-?[0-9]{4}$/.test(value)) {
          error = 'Telefone inválido (ex: 41999998888)';
        }
        break;
      case 'service':
        if (!value) error = 'Por favor, selecione um serviço';
        break;
      case 'message':
        if (!value.trim()) error = 'A mensagem é obrigatória';
        else if (value.trim().length < 10) error = 'A mensagem deve ter pelo menos 10 caracteres';
        break;
      default:
        break;
    }
    
    return error;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Atualiza o valor do campo
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Se houver erro no campo que está sendo alterado, valida novamente
    if (errors[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };
  
  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };
  
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;
    
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Valida todos os campos antes de enviar
    if (!validateForm()) {
      // Rola até o primeiro erro
      const firstErrorField = document.querySelector('[data-error="true"]');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Aqui você faria a chamada para sua API de envio de e-mail
      // Exemplo com fetch:
      /*
      const response = await fetch('https://sua-api.com/enviar-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          to: 'contato@hlcardetail.com.br',
          subject: `Novo contato - ${formData.service}`
        }),
      });
      
      if (!response.ok) {
        throw new Error('Erro ao enviar mensagem');
      }
      */
      
      // Simulação de envio
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus({
        success: true,
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
      });
      
      // Limpar formulário
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Resetar erros
      setErrors({});
      
      // Resetar mensagem após 5 segundos
      setTimeout(() => {
        setSubmitStatus({ success: null, message: '' });
      }, 5000);
      
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      setSubmitStatus({
        success: false,
        message: 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde ou entre em contato por telefone/WhatsApp.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 font-serif">Entre em Contato</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Preencha o formulário abaixo ou utilize um dos nossos canais de atendimento.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            {submitStatus.message && (
              <div className={`mb-6 p-4 rounded-md ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Serviço de Interesse</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="lavagem-basica">Lavagem Básica</option>
                  <option value="lavagem-premium">Lavagem Premium</option>
                  <option value="detalhamento">Detalhamento Completo</option>
                  <option value="polimento">Polimento e Cristalização</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Informações de contato */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 font-serif">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-amber-100 p-3 rounded-full text-amber-600">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-500">Endereço</h4>
                    <p className="mt-1 text-gray-700">Rua José de Alencar, 1550 - Cristo Rei - Curitiba - PR, 80040-070</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-amber-100 p-3 rounded-full text-amber-600">
                    <FaPhone size={18} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-500">Telefone</h4>
                    <p className="mt-1 text-gray-700">
                      <a href="tel:+554196003019" className="hover:text-amber-600 transition-colors duration-300">
                        (41) 9600-3019
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-amber-100 p-3 rounded-full text-amber-600">
                    <FaEnvelope size={18} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-500">E-mail</h4>
                    <p className="mt-1 text-gray-700">
                      <a href="mailto:contato@hlcardetail.com.br" className="hover:text-amber-600 transition-colors duration-300">
                        contato@hlcardetail.com.br
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-amber-100 p-3 rounded-full text-amber-600">
                    <FaClock size={18} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-500">Horário de Atendimento</h4>
                    <p className="mt-1 text-gray-700">Segunda a Sexta: 08:00 - 18:00</p>
                    <p className="text-gray-700">Sábado: 09:00 - 13:00</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-sm font-medium text-gray-500 mb-3">Siga-nos nas redes sociais</h4>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/hllavacaresteticaautomotiva" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-amber-100 hover:text-amber-600 transition-colors duration-300">
                    <FaFacebook size={18} />
                  </a>
                  <a href="https://www.instagram.com/p/C51E7L4PRy6/?utm_source=ig_web_copy_link" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-amber-100 hover:text-amber-600 transition-colors duration-300">
                    <FaInstagram size={18} />
                  </a>
                  <a href="https://wa.me/554196003019" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-amber-100 hover:text-amber-600 transition-colors duration-300">
                    <FaWhatsapp size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-lg font-semibold mb-3 text-gray-900">Localização</h4>
              <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.965343120584!2d-49.28410772445834!3d-25.42844332653333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce472f8a3f6b5%3A0x4e8e6a3e5a8e6a3e!2sRua%20Jos%C3%A9%20de%20Alencar%2C%201550%20-%20Cristo%20Rei%2C%20Curitiba%20-%20PR%2C%2080040-070!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="250" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  title="Localização HL Car Detail"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
