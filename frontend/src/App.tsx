import { TopStrip } from "./components/shared/TopStrip";
import { Header } from "./components/shared/Header";
import { AdminDashboard } from "./components/admin/AdminDashboard";
import { AdminButton } from "./components/admin/AdminButton";
import ScholarsAcademyPage from "./components/pages/BioSection";
import { Hero } from "./components/shared/Hero";
import { AgendaSection } from "./components/sections/AgendaSection";
import { AcademicsSection } from "./components/academics/AcademicsSection";
import { CampusSection } from "./components/campus/CampusSection";
import { AdmissionsSection } from "./components/admissions/AdmissionsSection";
import { ContactSection } from "./components/contact/ContactSection";
import { Footer } from "./components/shared/Footer";
import { AboutUs } from "./components/pages/AboutUs";
import { OurVision } from "./components/pages/OurVision";
import { FoundersMessage } from "./components/pages/FoundersMessage";
import { OurStaff } from "./components/pages/OurStaff";
import { OurManagement } from "./components/pages/OurManagement";
import { TheLearning } from "./components/pages/TheLearning";
import { AcademicsCurriculum } from "./components/academics/AcademicsCurriculum";
import { AcademicsFaculty } from "./components/academics/AcademicsFaculty";
import { AcademicsResults } from "./components/academics/AcademicsResults";
import { AcademicsPrograms } from "./components/academics/AcademicsPrograms";
import { Sports } from "./components/beyond/Sports";
import ArtsCulture from "./components/beyond/ArtsCulture";
import { ClubsSocieties } from "./components/beyond/ClubsSocieties";
import { CommunityService } from "./components/beyond/CommunityService";
import { AdmissionsProcess } from "./components/admissions/AdmissionsProcess";
import { AdmissionsFees } from "./components/admissions/AdmissionsFees";
import { AdmissionsRequirements } from "./components/admissions/AdmissionsRequirements";
import { AdmissionsContact } from "./components/admissions/AdmissionsContact";
import { CampusFacilities } from "./components/campus/CampusFacilities";
import { CampusAccommodation } from "./components/campus/CampusAccommodation";
import { CampusEvents } from "./components/campus/CampusEvents";
import { SchoolGallery } from "./components/campus/SchoolGallery";
import { ContactOffice } from "./components/contact/ContactOffice";
import { ContactAdmissions } from "./components/contact/ContactAdmissions";
import { ContactSupport } from "./components/contact/ContactSupport";
import { ContactForm } from "./components/contact/ContactForm";
import { useScrollReveal } from "./hooks/useScrollReveal";

export default function App() {
  useScrollReveal();
  const path = window.location.pathname;

  // Handle admin button click
  const handleAdminClick = () => {
    window.location.pathname = "/admin";
  };

  // Admin Dashboard Route
  if (path === "/admin") {
    return <AdminDashboard />;
  }

  // Render individual pages based on URL path
  if (path === "/about-us") {
    return (
      <div className="min-h-screen flex flex-col" id="top">
        <TopStrip />
        <Header />
        <main className="flex-1">
          <AboutUs />
        </main>
        <Footer />
        <AdminButton onClick={handleAdminClick} />
      </div>
    );
  }

  if (path === "/our-vision") {
    return (
      <div className="min-h-screen flex flex-col" id="top">
        <TopStrip />
        <Header />
        <main className="flex-1">
          <OurVision />
        </main>
        <Footer />
        <AdminButton onClick={handleAdminClick} />
      </div>
    );
  }

  if (path === "/founders-message") {
    return (
      <div className="min-h-screen flex flex-col" id="top">
        <TopStrip />
        <Header />
        <main className="flex-1">
          <FoundersMessage />
        </main>
        <Footer />
        <AdminButton onClick={handleAdminClick} />
      </div>
    );
  }

  if (path === "/our-staff") {
    return (
      <div className="min-h-screen flex flex-col" id="top">
        <TopStrip />
        <Header />
        <main className="flex-1">
          <OurStaff />
        </main>
        <Footer />
        <AdminButton onClick={handleAdminClick} />
      </div>
    );
  }

  if (path === "/our-management") {
    return (
      <div className="min-h-screen flex flex-col" id="top">
        <TopStrip />
        <Header />
        <main className="flex-1">
          <OurManagement />
        </main>
        <Footer />
        <AdminButton onClick={handleAdminClick} />
      </div>
    );
  }

  // Academics
  if (path === "/academics-curriculum") {
    return (
      <div className="min-h-screen flex flex-col" id="top">
        <TopStrip />
        <Header />
        <main className="flex-1">
          <AcademicsCurriculum />
        </main>
        <Footer />
        <AdminButton onClick={handleAdminClick} />
      </div>
    );
  }

  if (path === "/academics-faculty") {
    return (
      <div className="min-h-screen flex flex-col" id="top">
        <TopStrip />
        <Header />
        <main className="flex-1">
          <AcademicsFaculty />
        </main>
        <Footer />
        <AdminButton onClick={handleAdminClick} />
      </div>
    );
  }

  if (path === "/academics-results") {
    return (
      <div className="min-h-screen flex flex-col" id="top">
        <TopStrip />
        <Header />
        <main className="flex-1">
          <AcademicsResults />
        </main>
        <Footer />
        <AdminButton onClick={handleAdminClick} />
      </div>
    );
  }

  if (path === "/academics-programs") {
    return (
      <div className="min-h-screen flex flex-col" id="top">
        <TopStrip />
        <Header />
        <main className="flex-1">
          <AcademicsPrograms />
        </main>
        <Footer />
        <AdminButton onClick={handleAdminClick} />
      </div>
    );
  }

  if (path === "/theLearning") {
    return (
      <div className="min-h-screen flex flex-col" id="top">
        <TopStrip />
        <Header />
        <main className="flex-1">
          <TheLearning />
        </main>
        <Footer />
        <AdminButton onClick={handleAdminClick} />
      </div>
    );
  }

  // Beyond Academics
  if (path === "/sports") {
    return (
      <div className="min-h-screen flex flex-col" id="top">
        <TopStrip />
        <Header />
        <main className="flex-1">
          <Sports />
        </main>
        <Footer />
        <AdminButton onClick={handleAdminClick} />
      </div>
    );
  }

  if (path === "/arts-culture") {
    return (
      <div className="min-h-screen flex flex-col" id="top">
        <TopStrip />
        <Header />
        <main className="flex-1">
          <ArtsCulture />
        </main>
        <Footer />
        <AdminButton onClick={handleAdminClick} />
      </div>
    );
  }

  if (path === "/clubs-societies") {
    return (
      <div className="min-h-screen flex flex-col" id="top">
        <TopStrip />
        <Header />
        <main className="flex-1">
          <ClubsSocieties />
        </main>
        <Footer />
        <AdminButton onClick={handleAdminClick} />
      </div>
    );
  }

  if (path === "/community-service") {
    return (
      <div className="min-h-screen flex flex-col" id="top">
        <TopStrip />
        <Header />
        <main className="flex-1">
          <CommunityService />
        </main>
        <Footer />
        <AdminButton onClick={handleAdminClick} />
      </div>
    );
  }

  // Admissions
  if (path === "/admissions-process") {
    return (
      <div className="min-h-screen flex flex-col" id="top">
        <TopStrip />
        <Header />
        <main className="flex-1">
          <AdmissionsProcess />
        </main>
        <Footer />
        <AdminButton onClick={handleAdminClick} />
      </div>
    );
  }

  if (path === "/admissions-fees") {
    return (
      <div className="min-h-screen flex flex-col" id="top">
        <TopStrip />
        <Header />
        <main className="flex-1">
          <AdmissionsFees />
        </main>
        <Footer />
        <AdminButton onClick={handleAdminClick} />
      </div>
    );
  }

  if (path === "/admissions-requirements") {
    return (
      <div className="min-h-screen flex flex-col" id="top">
        <TopStrip />
        <Header />
        <main className="flex-1">
          <AdmissionsRequirements />
        </main>
        <Footer />
        <AdminButton onClick={handleAdminClick} />
      </div>
    );
  }

  if (path === "/admissions-contact") {
    return (
      <div className="min-h-screen flex flex-col" id="top">
        <TopStrip />
        <Header />
        <main className="flex-1">
          <AdmissionsContact />
        </main>
        <Footer />
        <AdminButton onClick={handleAdminClick} />
      </div>
    );
  }

  // School Life
  if (path === "/campus-facilities") {
    return (
      <div className="min-h-screen flex flex-col" id="top">
        <TopStrip />
        <Header />
        <main className="flex-1">
          <CampusFacilities />
        </main>
        <Footer />
        <AdminButton onClick={handleAdminClick} />
      </div>
    );
  }

  if (path === "/campus-accommodation") {
    return (
      <div className="min-h-screen flex flex-col" id="top">
        <TopStrip />
        <Header />
        <main className="flex-1">
          <CampusAccommodation />
        </main>
        <Footer />
        <AdminButton onClick={handleAdminClick} />
      </div>
    );
  }

  if (path === "/campus-events") {
    return (
      <div className="min-h-screen flex flex-col" id="top">
        <TopStrip />
        <Header />
        <main className="flex-1">
          <CampusEvents />
        </main>
        <Footer />
        <AdminButton onClick={handleAdminClick} />
      </div>
    );
  }

  if (path === "/campus-gallery") {
    return (
      <div className="min-h-screen flex flex-col" id="top">
        <TopStrip />
        <Header />
        <main className="flex-1">
          <SchoolGallery />
        </main>
        <Footer />
        <AdminButton onClick={handleAdminClick} />
      </div>
    );
  }

  // Contact
  if (path === "/contact-office") {
    return (
      <div className="min-h-screen flex flex-col" id="top">
        <TopStrip />
        <Header />
        <main className="flex-1">
          <ContactOffice />
        </main>
        <Footer />
        <AdminButton onClick={handleAdminClick} />
      </div>
    );
  }

  if (path === "/contact-admissions") {
    return (
      <div className="min-h-screen flex flex-col" id="top">
        <TopStrip />
        <Header />
        <main className="flex-1">
          <ContactAdmissions />
        </main>
        <Footer />
        <AdminButton onClick={handleAdminClick} />
      </div>
    );
  }

  if (path === "/contact-support") {
    return (
      <div className="min-h-screen flex flex-col" id="top">
        <TopStrip />
        <Header />
        <main className="flex-1">
          <ContactSupport />
        </main>
        <Footer />
        <AdminButton onClick={handleAdminClick} />
      </div>
    );
  }

  if (path === "/contact-form") {
    return (
      <div className="min-h-screen flex flex-col" id="top">
        <TopStrip />
        <Header />
        <main className="flex-1">
          <ContactForm />
        </main>
        <Footer />
        <AdminButton onClick={handleAdminClick} />
      </div>
    );
  }

  // Default home page
  return (
    <div className="min-h-screen flex flex-col" id="top">
      <TopStrip />
      <Header />
      <main className="flex-1">
        <ScholarsAcademyPage />
        <Hero />
        <AgendaSection />
        <AcademicsSection />
        <CampusSection />
        <AdmissionsSection />
        <ContactSection />
      </main>
      <Footer />
      <AdminButton onClick={handleAdminClick} />
    </div>
  );
}
