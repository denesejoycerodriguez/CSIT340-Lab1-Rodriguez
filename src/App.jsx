function App() {
return (
 
<div>
  <header className="max-w-2xl mx-auto px-6 pt-16">
    <h1 className="text-4xl font-semibold tracking-tight">Denese Joyce S. Rodriguez</h1>
    <p className="mt-2 text-lg text-slate-600">Third year BSIT student at Cebu Institute of Technology – University.</p>
    <hr className="mt-8 border-slate-200" />
  </header>
 
  <main className="max-w-2xl mx-auto px-6 py-10">
 
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-3">About</h2>
      <p class="leading-relaxed text-slate-700">
        I grew up in Minglanilla, Cebu. I didn't pick IT at first, I was actually interested in the architecture
        course, but later changed my mind and picked IT. I think IT or technology in general is what I'm good at,
        I am somewhat adept at technology that's what made me drawn to IT.
      </p>
    </section>
 
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-3">Details</h2>
      <p className="leading-relaxed text-slate-700">
        Course: BS Information Technology
        <br />
        Year level: Third year
        <br />
        Hometown: Minglanilla, Cebu
      </p>
    </section>
 
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-3">Things I like</h2>
      <ul className="list-disc list-inside space-y-1 text-slate-700">
        <li>Binge watch series on weekends</li>
        <li>Bonding with my cats</li>
        <li>French Fries</li>
      </ul>
    </section>
 
    <section>
      <h2 className="text-xl font-semibold mb-3">Reach me</h2>
      <p className="leading-relaxed text-slate-700">
        denesejoyce.rodriguez@cit.edu
        <br />
        @dnse.jyce on most things
      </p>
    </section>
 
  </main>
 
  <section className="max-w-2xl mx-auto px-6 pb-16">
    <hr className="mb-6 border-slate-200" />
    <p className="text-sm text-slate-500">Made for CSIT340.</p>
  </section>
 
</div>
 
  );
}
 
export default App;
