export function CampusSection() {
  return (
    <section id="campus" className="py-10">
      <div className="container">
        <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
          <div>
            <div className="text-xs uppercase tracking-widest text-gray-600 mb-1">
              School Life
            </div>
            <h2>A safe, vibrant space for childhood</h2>
          </div>
          <p className="text-sm text-gray-600 max-w-md">
            From morning assembly to closing bell, students move through a
            well-organized day with space for learning, play and quiet
            reflection.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1.1fr] gap-5">
          {/* Main gallery image */}
          <div className="relative rounded-[18px] overflow-hidden shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
            <img
              src="https://images.unsplash.com/photo-1759834687385-fc3a66687fb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjYW1wdXMlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjUxODk5ODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Scholars engaged in classroom learning"
              className="w-full h-full max-h-[320px] object-cover"
            />
            <div className="absolute left-4 bottom-4 px-3 py-1.5 rounded-full bg-slate-900/88 text-gray-200 text-xs backdrop-blur-sm">
              Inside our learning spaces
            </div>
          </div>

          {/* Side column */}
          <div className="grid grid-rows-2 gap-3.5">
            {/* Small gallery image */}
            <div className="relative rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
              <img
                src="https://images.unsplash.com/photo-1758598737498-03850be1ad89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHN0dWR5aW5nJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzY1MjMwNDgyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Students at The Scholar's Academy"
                className="w-full h-full max-h-[150px] object-cover"
              />
            </div>

            {/* Testimonial */}
            <div className="rounded-[18px] bg-gradient-to-br from-blue-50 to-white p-4 shadow-[0_10px_30px_rgba(15,23,42,0.08)] border border-blue-200/90 text-sm text-gray-700">
              <div className="mb-2.5">
                &quot;The school is well organized and efficient. What keeps us
                coming back are the wonderful kids we get to teach and learn
                from every day — they are in the right hands.&quot;
              </div>
              <div className="text-gray-900">Ajay Oli</div>
              <div className="text-xs text-gray-600">
                Teacher, The Scholar&apos;s Academy
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
