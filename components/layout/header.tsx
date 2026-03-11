'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { navigation } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear scroll do body quando menu estiver aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled || isMenuOpen
            ? 'bg-[#0a0a0a] shadow-lg'
            : 'bg-[#0a0a0a]/90 backdrop-blur-sm'
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                MM
              </span>
              <span className="hidden font-serif text-lg font-medium text-gold sm:block">
                Empreendimentos
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 lg:flex">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative font-sans text-sm font-medium text-white/80 transition-colors hover:text-gold after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-gold after:transition-all hover:after:w-full"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
            <Link
              href="/contato"
              className="hidden rounded-sm bg-gold px-6 py-2.5 font-sans text-sm font-semibold text-[#0a0a0a] transition-all hover:bg-gold-light lg:block"
            >
              Solicitar Orcamento
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-50 p-2 text-white lg:hidden"
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed top-0 right-0 z-40 h-full w-full max-w-sm bg-[#0a0a0a] shadow-2xl transition-transform duration-300 ease-in-out lg:hidden',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex h-full flex-col gap-2 px-6 pt-28 pb-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg border-b border-white/10 py-4 font-sans text-lg font-medium text-white transition-colors hover:bg-white/5 hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-auto pt-6">
            <Link
              href="/contato"
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-lg bg-gold px-6 py-4 text-center font-sans text-base font-semibold text-[#0a0a0a] transition-all hover:bg-gold-light"
            >
              Solicitar Orcamento
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
