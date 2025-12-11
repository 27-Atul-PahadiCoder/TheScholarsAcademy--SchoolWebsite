import { GallerySection } from "../gallery/GallerySection";

export function OurVision() {
  return (
    <>
      <section id="our-vision" className="py-20 bg-gray-50">
        <div className="container max-w-6xl px-4 mx-auto">
          {/* Header Section */}
          <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
            Our Vision and Ethos
          </h2>

          {/* Vision Statement */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">
              Our Vision
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our vision is to create an inclusive learning environment where
              every student can thrive academically and personally. We strive to
              develop responsible, innovative, and compassionate individuals who
              will contribute positively to society.
            </p>
          </div>

          {/* Ethos Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">
              Our Ethos
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We believe in creating an atmosphere that combines our values and
              intentions to positively impact a child's life. Every individual
              has the potential for greatness, and we, as an institution, work
              as a catalyst to unlock that potential. Our goal is to provide an
              environment conducive to holistic learning—preparing students not
              only for academic success but for the real, dynamic world.
            </p>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">
              Our Values
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              At The Scholar’s Academy, our values shape the culture and
              behavior of our institution. These principles guide us in
              fostering the growth of every child:
            </p>
            <ul className="grid grid-cols-2 gap-6 text-lg text-gray-600">
              <li className="flex items-center">
                <span className="mr-3 text-blue-500">✔</span> Integrity
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-blue-500">✔</span> Diversity and
                Inclusion
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-blue-500">✔</span> Excellence
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-blue-500">✔</span> Collaboration
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-blue-500">✔</span> Empathy
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-blue-500">✔</span> Curiosity
              </li>
            </ul>
          </div>

          {/* Strategic Objectives Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">
              Strategic Objectives
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              To achieve our mission, we have set clear objectives for our
              institution, with the aim to create an environment that fosters
              lifelong learning and personal growth. These objectives focus on
              integrating cutting-edge technologies and international best
              practices while staying grounded in the values of our heritage and
              culture.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-lg shadow-lg overflow-hidden">
                <img
                  src="P1050333.jpg"
                  alt="Educational Image"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-lg shadow-lg overflow-hidden">
                <img
                  src="P1040619.jpg"
                  alt="Classroom Image"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Inspirational Quote */}
          <div className="text-center mb-16">
            <p className="text-xl text-gray-600 italic">
              "The day you stop learning is the day you stop living." — Albert
              Einstein
            </p>
          </div>

          {/* Expectations from Parents */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">
              Expectation from Parents
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Active involvement and support from parents are crucial to a
              child's educational journey. We expect parents to:
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-600 space-y-4">
              <li>
                Engage in open communication with teachers and stay informed
                about their child’s progress, challenges, and accomplishments.
              </li>
              <li>
                Create a conducive learning environment at home by encouraging a
                love for reading and supporting homework.
              </li>
              <li>
                Attend parent-teacher meetings, school events, and participate
                in school activities to show commitment to the child's
                development.
              </li>
              <li>
                Maintain regular communication with the school to strengthen the
                bond between home and school.
              </li>
              <li>
                Support a healthy lifestyle, including proper sleep, nutrition,
                and limiting screen time, to enhance learning readiness.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <GallerySection
        slug="our-vision"
        title="Vision In Action"
        description="Evidence boards, parent studios, and student-led nature expeditions that prove our ethos lives beyond the page."
      />
    </>
  );
}
