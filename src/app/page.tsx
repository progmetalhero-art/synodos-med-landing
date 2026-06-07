"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Heart, Activity, QrCode, CheckCircle2, ShieldCheck, Stethoscope, Users, ShoppingBag, Download, Quote } from 'lucide-react';

export default function Home() {
  useEffect(() => {
    // Micro-interaction for buttons
    const handleMouseDown = (e: MouseEvent) => {
      (e.currentTarget as HTMLElement).style.transform = 'scale(0.96)';
    };
    const handleMouseUp = (e: MouseEvent) => {
      (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
    };

    document.querySelectorAll('button').forEach(button => {
      button.addEventListener('mousedown', handleMouseDown as EventListener);
      button.addEventListener('mouseup', handleMouseUp as EventListener);
      button.addEventListener('mouseleave', handleMouseUp as EventListener);
    });

    // Simple Intersection Observer for reveal animations
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Initial opacity 0 will be overriden by the slide-up animation to 1
    document.querySelectorAll('.glass-card, .animate-slide-up').forEach(card => {
      card.classList.add('opacity-0');
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-background selection:bg-primary-container selection:text-on-primary-container text-on-surface">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-surface/10 backdrop-blur-[20px] border-b border-white/20">
        <nav className="flex justify-between items-center h-20 px-gutter max-w-container-max mx-auto">
          <div className="flex items-center gap-3">
            <img src="/icon-192.png" alt="Synodos-Med+ Logo" className="w-9 h-9 rounded-xl shadow-[0_0_15px_rgba(8,145,178,0.3)]" />
            <span className="font-headline-md text-2xl font-bold tracking-tighter text-on-surface">
              Synodos-<span className="text-primary">MED<span className="text-on-surface ml-[2px] font-medium">+</span></span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link className="text-primary font-bold border-b-2 border-primary pb-1 font-body-md" href="#home">Αρχική</Link>
            <Link className="text-on-surface-variant hover:text-on-surface transition-all duration-200 font-body-md" href="#features">Υπηρεσίες</Link>
            <Link className="text-on-surface-variant hover:text-on-surface transition-all duration-200 font-body-md" href="#privacy">Προστασία</Link>
            <Link className="text-on-surface-variant hover:text-on-surface transition-all duration-200 font-body-md" href="#story">Η Ιστορία</Link>
            <Link className="text-on-surface-variant hover:text-on-surface transition-all duration-200 font-body-md" href="#faq">Συχνές Ερωτήσεις</Link>
          </div>
          <div className="flex items-center gap-4">
            <a href="#download" className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-white/90 transition-all font-body-md">
              Λήψη App
            </a>
          </div>
        </nav>
      </header>

      <main className="relative pt-20">
        {/* Background Orbs */}
        <div className="glow-orb top-[-100px] left-[-100px] w-[500px] h-[500px] bg-primary/40"></div>
        <div className="glow-orb top-[10%]" style={{ right: "-50px", width: "400px", height: "400px", backgroundColor: "#0891b2" }}></div>

        {/* Hero Section */}
        <section id="home" className="relative px-gutter pt-32 pb-64 overflow-hidden">
          <div className="max-w-container-max mx-auto text-center relative z-10">
            {/* Logo in Hero */}
            <div className="flex justify-center mb-8 animate-slide-up">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full"></div>
                <img src="/icon-192.png" alt="Synodos-Med Logo" className="relative w-28 h-28 md:w-32 md:h-32 rounded-3xl border border-white/10 shadow-2xl" />
              </div>
            </div>

            {/* Version Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <span className="font-label-sm text-xs text-primary">Έκδοση 2.0-beta</span>
              <span className="w-[1px] h-3 bg-white/20"></span>
              <span className="font-label-sm text-xs text-on-surface-variant">Διαθέσιμο Τώρα</span>
            </div>
            
            <h1 className="font-headline-xl-mobile md:font-headline-xl text-4xl md:text-6xl mb-6 max-w-4xl mx-auto font-extrabold tracking-tight">
              Ο ψηφιακός βοηθός στη <span className="text-gradient">συνοδεία ασθενών</span>
            </h1>
            
            <p className="font-body-lg text-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
              Μια ολοκληρωμένη πλατφόρμα για την παρακολούθηση υγείας, τη διαχείριση φαρμακευτικής αγωγής και την ασφαλή ανταλλαγή δεδομένων σε πραγματικό χρόνο.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
              <a href="#download" className="flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-[0_0_20px_rgba(8,145,178,0.4)] transition-all">
                Λήψη Εφαρμογής
                <ArrowRight size={20} />
              </a>
              <a href="#features" className="px-8 py-4 rounded-xl border border-white/20 backdrop-blur-md hover:bg-white/5 transition-all">
                Δείτε πώς λειτουργεί
              </a>
            </div>

            {/* Floating Mockups Preview */}
            <div className="relative max-w-6xl mx-auto animate-slide-up mt-12" style={{ animationDelay: "0.2s" }}>
              <div className="absolute inset-0 bg-primary/20 blur-[120px] -z-10 rounded-full"></div>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 relative z-10 perspective-1000">
                {/* Left Phone */}
                <div className="hidden md:block w-64 rounded-[2.5rem] border-[6px] border-[#1e293b] overflow-hidden shadow-2xl transform -rotate-12 translate-y-12 translate-x-8 opacity-70 hover:opacity-100 hover:-translate-y-4 hover:rotate-0 transition-all duration-500 ease-out">
                  <img src="/screen1.jpg?v=4" alt="Οργάνωση Σημειώσεων" className="w-full h-auto" />
                </div>
                
                {/* Center Phone */}
                <div className="w-72 sm:w-80 rounded-[2.5rem] border-[8px] border-[#0f172a] overflow-hidden shadow-[0_20px_50px_rgba(8,145,178,0.5)] z-20 hover:-translate-y-8 transition-transform duration-500 ease-out">
                  <img src="/screen5.jpg?v=4" alt="Κεντρική Οθόνη Synodos-Med" className="w-full h-auto" />
                </div>
                
                {/* Right Phone */}
                <div className="hidden md:block w-64 rounded-[2.5rem] border-[6px] border-[#1e293b] overflow-hidden shadow-2xl transform rotate-12 translate-y-12 -translate-x-8 opacity-70 hover:opacity-100 hover:-translate-y-4 hover:rotate-0 transition-all duration-500 ease-out">
                  <img src="/screen6.jpg?v=4" alt="Χρήσιμα Τηλέφωνα" className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="px-gutter py-stack-lg relative">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-4xl font-bold mb-4">Όλα όσα χρειάζεστε σε μία οθόνη</h2>
              <div className="h-1 w-24 bg-primary mx-auto rounded-full opacity-50"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature Card 1 */}
              <div className="glass-card p-stack-md rounded-2xl hover:border-primary transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Heart className="text-tertiary fill-tertiary" size={24} />
                </div>
                <h3 className="font-headline-md text-xl font-semibold mb-3">Διαχείριση Φαρμάκων</h3>
                <p className="text-on-surface-variant font-body-md text-base">
                  Έξυπνες υπενθυμίσεις και καταγραφή δόσεων με δυνατότητα διασύνδεσης με το φαρμακείο σας.
                </p>
              </div>

              {/* Feature Card 2 */}
              <div className="glass-card p-stack-md rounded-2xl border-primary/30 hover:border-primary transition-colors group relative overflow-hidden">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 blur-2xl"></div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                  <Activity className="text-primary" size={24} />
                </div>
                <h3 className="font-headline-md text-xl font-semibold mb-3">Ζωτικά Σημεία</h3>
                <p className="text-on-surface-variant font-body-md text-base">
                  Παρακολούθηση πίεσης, οξυγόνου και καρδιακών παλμών με γραφικές παραστάσεις προόδου.
                </p>
              </div>

              {/* Feature Card 3 */}
              <div className="glass-card p-stack-md rounded-2xl hover:border-primary transition-colors group relative overflow-hidden">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-teal-500/10 blur-2xl"></div>
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(20,184,166,0.3)]">
                  <QrCode className="text-teal-500" size={24} />
                </div>
                <h3 className="font-headline-md text-xl font-semibold mb-3">P2P QR Handover</h3>
                <p className="text-on-surface-variant font-body-md text-base">
                  Ασφαλής μεταφορά ιατρικού ιστορικού μεταξύ συνοδών μέσω κρυπτογραφημένου κωδικού QR.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Section */}
        <section id="privacy" className="px-gutter py-stack-lg relative overflow-hidden">
          <div className="max-w-container-max mx-auto">
            <div className="glass-card p-12 rounded-[2.5rem] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-black to-teal-900/30 pointer-events-none"></div>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-headline-lg text-4xl font-bold mb-6">
                    Απόλυτη Ιδιωτικότητα. <br/><span className="text-primary">Μηδέν Servers.</span>
                  </h2>
                  <p className="font-body-lg text-lg text-on-surface-variant mb-8">
                    Η τεχνολογία μας βασίζεται στην τοπική αποθήκευση. Τα δεδομένα υγείας σας δεν φεύγουν ποτέ από τη συσκευή σας, εκτός αν επιλέξετε να τα μοιραστείτε πρόσωπο-με-πρόσωπο.
                  </p>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-teal-400" size={20} />
                      <span className="font-body-md text-base">End-to-end κρυπτογράφηση</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-teal-400" size={20} />
                      <span className="font-body-md text-base">Δεν απαιτείται λογαριασμός Cloud</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-teal-400" size={20} />
                      <span className="font-body-md text-base">GDPR Compliant by Architecture</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <div className="w-full max-w-sm aspect-square glass-card rounded-3xl flex items-center justify-center p-8 border-primary/20 bg-primary/5">
                    <div className="text-center flex flex-col items-center">
                      <ShieldCheck className="text-primary mb-4" size={80} strokeWidth={1.5} />
                      <div className="font-label-sm text-xs text-primary tracking-widest uppercase">Verified Privacy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* How it Works Section */}
        <section className="px-gutter py-stack-lg relative bg-surface-container-low/30 border-y border-white/5 mt-16">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-4xl font-bold mb-4">Πώς Λειτουργεί</h2>
              <div className="h-1 w-24 bg-primary mx-auto rounded-full opacity-50"></div>
              <p className="text-on-surface-variant mt-4 font-body-lg">Τρία απλά βήματα για να οργανώσετε τη φροντίδα.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="relative group">
                <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                  <span className="font-headline-xl text-3xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-headline-md text-xl font-semibold mb-3">Δημιουργία Προφίλ</h3>
                <p className="text-on-surface-variant font-body-md">Εισάγετε τα βασικά στοιχεία του ασθενούς με απόλυτη ασφάλεια στη συσκευή σας.</p>
              </div>
              <div className="relative group">
                <div className="hidden md:block absolute top-10 right-[-50%] w-[100%] h-[2px] bg-gradient-to-r from-primary/50 to-transparent -z-10"></div>
                <div className="w-20 h-20 mx-auto bg-teal-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(20,184,166,0.2)]">
                  <span className="font-headline-xl text-3xl font-bold text-teal-400">2</span>
                </div>
                <h3 className="font-headline-md text-xl font-semibold mb-3">Καταγραφή Βάρδιας</h3>
                <p className="text-on-surface-variant font-body-md">Καταγράψτε φάρμακα, μετρήσεις και σημειώσεις κατά τη διάρκεια της φροντίδας.</p>
              </div>
              <div className="relative group">
                <div className="hidden md:block absolute top-10 right-[-50%] w-[100%] h-[2px] bg-gradient-to-r from-teal-500/50 to-transparent -z-10"></div>
                <div className="w-20 h-20 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                  <span className="font-headline-xl text-3xl font-bold text-blue-400">3</span>
                </div>
                <h3 className="font-headline-md text-xl font-semibold mb-3">Παράδοση με QR</h3>
                <p className="text-on-surface-variant font-body-md">Μοιραστείτε τα δεδομένα άμεσα στον επόμενο συνοδό σκανάροντας ένα QR Code.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="px-gutter py-stack-lg relative">
          <div className="max-w-container-max mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-headline-lg text-4xl font-bold mb-6">Σε ποιους απευθύνεται;</h2>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                      <Stethoscope className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-headline-md text-xl font-semibold mb-2">Επαγγελματίες Συνοδούς & Νοσηλευτές</h3>
                      <p className="text-on-surface-variant">Οργανώστε τις βάρδιές σας, κρατήστε ιστορικό για πολλαπλούς ασθενείς και παραδώστε την επόμενη βάρδια γρήγορα και με ακρίβεια.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center shrink-0">
                      <Users className="text-teal-400" size={24} />
                    </div>
                    <div>
                      <h3 className="font-headline-md text-xl font-semibold mb-2">Οικογένειες & Φροντιστές</h3>
                      <p className="text-on-surface-variant">Μείνετε συντονισμένοι με τα υπόλοιπα μέλη της οικογένειας, διαχειριστείτε τα φάρμακα και μειώστε το άγχος της καθημερινής φροντίδας.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="glass-card p-8 rounded-3xl relative overflow-hidden flex items-center justify-center border-white/10">
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent -z-10"></div>
                 <img src="/screen2.jpg?v=4" alt="Οθόνη Επαφών" className="rounded-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 max-w-[250px]" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="px-gutter py-stack-lg relative bg-surface-container-low/30 border-y border-white/5">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-4xl font-bold mb-4">Συχνές Ερωτήσεις</h2>
              <div className="h-1 w-24 bg-primary mx-auto rounded-full opacity-50"></div>
            </div>
            
            <div className="space-y-4">
              <div className="glass-card p-6 rounded-2xl border-white/10">
                <h3 className="font-headline-md text-lg font-semibold mb-2 text-primary">Απαιτείται σύνδεση στο Internet;</h3>
                <p className="text-on-surface-variant font-body-md">Όχι! Το Synodos-Med λειτουργεί πλήρως offline. Όλα τα δεδομένα αποθηκεύονται στη συσκευή σας με ασφάλεια.</p>
              </div>
              <div className="glass-card p-6 rounded-2xl border-white/10">
                <h3 className="font-headline-md text-lg font-semibold mb-2 text-primary">Πώς γίνεται η μεταφορά δεδομένων (QR Handover);</h3>
                <p className="text-on-surface-variant font-body-md">Όταν τελειώνει η βάρδια, η εφαρμογή δημιουργεί ένα κρυπτογραφημένο QR Code. Ο επόμενος συνοδός το σκανάρει με το δικό του Synodos-Med και όλα τα δεδομένα μεταφέρονται άμεσα, χωρίς χρήση ίντερνετ.</p>
              </div>
              <div className="glass-card p-6 rounded-2xl border-white/10">
                <h3 className="font-headline-md text-lg font-semibold mb-2 text-primary">Είναι η εφαρμογή δωρεάν;</h3>
                <p className="text-on-surface-variant font-body-md">Ναι, η εφαρμογή είναι εντελώς δωρεάν για λήψη και χρήση, χωρίς κρυφές χρεώσεις ή διαφημίσεις.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section id="story" className="px-gutter py-16 relative">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-10 md:p-16 rounded-[3rem] border-primary/20 relative overflow-hidden text-center shadow-[0_0_40px_rgba(34,211,238,0.1)]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent -z-10"></div>
              <Quote className="text-primary/20 absolute top-8 left-8" size={80} />
              
              <h3 className="font-headline-lg text-xl md:text-2xl font-semibold italic mb-4 leading-relaxed relative z-10 text-on-surface text-left">
                "Το Synodos-Med γεννήθηκε μέσα από 10 χρόνια διανυκτερεύσεων στις πλαστικές καρέκλες των δημόσιων νοσοκομείων. Από τη μάχη με τον καρκίνο και τη νεφρική νόσο, μέχρι την αγωνία ενός 9ωρου χειρουργείου, έμαθα ένα πράγμα: ο συνοδός είναι ο αφανής ήρωας που κρατάει το χέρι του ασθενούς, ενώ ο ίδιος συχνά δεν έχει πού να στηριχτεί."
              </h3>
              <h3 className="font-headline-lg text-xl md:text-2xl font-semibold italic mb-8 leading-relaxed relative z-10 text-on-surface text-left">
                "Αυτή η εφαρμογή φτιάχτηκε για εσάς. Για να σας προσφέρει την ψυχραιμία που χρειάζεστε και τις απαντήσεις που ψάχνετε μέσα στη νύχτα. Δεν είστε μόνοι σας σε αυτόν τον διάδρομο. Είμαστε μαζί."
              </h3>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-bold text-primary">Χ.Ν.</span>
                </div>
                <div className="text-left flex items-center">
                  <div className="font-bold text-on-surface text-lg">Χρήστος Ν.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA & Download Section */}
        <section id="download" className="px-gutter py-24 relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-primary/10 blur-3xl -z-10"></div>
          <div className="max-w-2xl mx-auto">
            <h2 className="font-headline-xl text-4xl md:text-5xl font-extrabold mb-6">Ξεκινήστε Σήμερα</h2>
            <p className="font-body-lg text-xl text-on-surface-variant mb-10">
              Κατεβάστε το Synodos-Med και κάντε την οργάνωση της φροντίδας πιο εύκολη, ασφαλή και άμεση από ποτέ.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="/synodos-med.apk" download="synodos-med.apk" className="flex items-center justify-center gap-4 bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-10 py-5 rounded-2xl font-bold hover:shadow-[0_0_30px_rgba(8,145,178,0.5)] transition-all group transform hover:-translate-y-1">
                <Download className="group-hover:scale-110 transition-transform" size={32} />
                <div className="text-left">
                  <div className="text-xs font-normal opacity-80 uppercase tracking-wider">Αμεση Ληψη</div>
                  <div className="text-xl leading-tight">Αρχείο APK</div>
                </div>
              </a>
            </div>
            <p className="mt-6 text-xs text-on-surface-variant opacity-60">
              Έκδοση 2.0-beta | Μέγεθος: ~15MB | Απαιτεί Android 8.0+
            </p>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="w-full py-stack-lg border-t border-outline-variant/30 bg-background">
        <div className="flex flex-col items-center justify-center gap-stack-md px-gutter w-full max-w-container-max mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <img src="/icon-192.png" alt="Synodos-Med+ Logo" className="w-6 h-6 rounded-lg opacity-80" />
            <span className="font-headline-md text-xl font-bold text-on-surface">Synodos-<span className="text-primary">MED<span className="text-on-surface ml-[2px] font-medium">+</span></span></span>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">Όροι Χρήσης</Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">Πολιτική Απορρήτου</Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">Επικοινωνία</Link>
          </div>
          <p className="text-on-surface-variant font-body-md opacity-60 text-sm">
            © 2024 Synodos-MED. Όλα τα δικαιώματα διατηρούνται.
          </p>
        </div>
      </footer>
    </div>
  );
}
