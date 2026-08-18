/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { CollectionsSection } from './components/CollectionsSection';
import { MasterclassSection } from './components/MasterclassSection';
import { MessageAtelier } from './components/MessageAtelier';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqAndLocationSection } from './components/FaqAndLocationSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ClassBookingModal } from './components/ClassBookingModal';
import { Toast, ToastMessage } from './components/Toast';
import { Product, Masterclass } from './types';

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [selectedProductForDetail, setSelectedProductForDetail] = useState<Product | null>(null);
  const [selectedProductForReserve, setSelectedProductForReserve] = useState<Product | null>(null);
  const [selectedMasterclass, setSelectedMasterclass] = useState<Masterclass | null>(null);
  const [initialReservationMessage, setInitialReservationMessage] = useState<string>('');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    (title: string, description?: string, type: 'success' | 'copy' | 'info' = 'success') => {
      const id = Math.random().toString(36).substring(2, 9);
      setToasts((prev) => [...prev, { id, title, description, type }]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 4000);
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const handleOpenReservation = () => {
    setSelectedProductForReserve(null);
    setIsReservationOpen(true);
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProductForDetail(product);
  };

  const handleQuickReserve = (product: Product) => {
    setSelectedProductForReserve(product);
    setIsReservationOpen(true);
  };

  const handleSelectClass = (masterclass: Masterclass) => {
    setSelectedMasterclass(masterclass);
  };

  const handleUseMessageInReservation = (msg: string) => {
    setInitialReservationMessage(msg);
    setIsReservationOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fbf9f6] text-[#1b1c1a] font-body-lg antialiased selection:bg-[#506050] selection:text-[#ffffff]">
      {/* Navigation */}
      <Navbar onOpenReservation={handleOpenReservation} />

      {/* Main Content Area */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection />

        {/* Spacer between Hero and Story */}
        <div className="h-20 sm:h-28 w-full" />

        {/* 2. Brand Story & Philosophy */}
        <StorySection />

        {/* 3. Signature Collections (Filterable Grid) */}
        <CollectionsSection
          onSelectProduct={handleSelectProduct}
          onQuickReserve={handleQuickReserve}
        />

        {/* Minimalist Visual Divider */}
        <div className="h-28 w-full flex items-center justify-center">
          <div className="w-[1px] h-20 bg-[#c4c8c0]/50" />
        </div>

        {/* 4. Atelier Masterclasses */}
        <MasterclassSection onSelectClass={handleSelectClass} />

        {/* Minimalist Visual Divider */}
        <div className="h-24 w-full flex items-center justify-center">
          <div className="w-[1px] h-16 bg-[#c4c8c0]/50" />
        </div>

        {/* 5. Message Atelier (Interactive generator & card insertion) */}
        <MessageAtelier
          onUseMessageInReservation={handleUseMessageInReservation}
          onShowToast={addToast}
        />

        {/* 6. Testimonials */}
        <TestimonialsSection />

        {/* 7. FAQ & Visit Us Location */}
        <FaqAndLocationSection />
      </main>

      {/* 8. Footer */}
      <Footer onOpenReservation={handleOpenReservation} />

      {/* Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        initialProduct={selectedProductForReserve}
        initialMessage={initialReservationMessage}
        onShowToast={addToast}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProductForDetail}
        onClose={() => setSelectedProductForDetail(null)}
        onReserve={handleQuickReserve}
      />

      {/* Class Booking Modal */}
      <ClassBookingModal
        masterclass={selectedMasterclass}
        onClose={() => setSelectedMasterclass(null)}
        onShowToast={addToast}
      />

      {/* Floating Toast Notification Stack */}
      <Toast toasts={toasts} onDismiss={removeToast} />
    </div>
  );
}
