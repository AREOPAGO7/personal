import Navbar from "@/navigation/Navbar";
import Footer from "@/footer/Footer";
const Work = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-28">
        <div className=" border-zinc-800 w-[80%] mx-auto pb-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-zinc-200">
            Projects
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-zinc-400">
            my projects and development work
          </p>
        </div>

        <div className="w-[100%] sm:px-14 lg:px-28 p-8 pt-1">
          <div className="grid grid-cols-1 gap-5 mt-8 lg:w-[100%] xl:w-[85%] mx-auto">
            <div className="bg-zinc-950 w-full h-full rounded-lg border-[1px] border-zinc-800 shadow-md p-6">
              <div className="space-y-6">
                <div className="border-[1px] border-zinc-800 rounded-lg p-4 hover:border-zinc-700 transition">
                  <div className="flex flex-col md:flex-row gap-6">
                    <img 
                      src="/chatapp.png" 
                      alt="Chat App Preview"
                      className="w-full md:w-1/3 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-bold text-zinc-300">Real-time Chat Application</h3>
                        <div className="flex items-center">
                          <i className="bx bx-time-five text-zinc-400 mr-1"></i>
                          <span className="text-xs text-zinc-400">4 weeks</span>
                        </div>
                      </div>
                      <p className="text-zinc-400 text-sm mt-2">
                        A full-featured chat application with real-time messaging, user authentication,
                        and group chat functionality. Built with Socket.io for real-time communication
                        and features message encryption and file sharing capabilities.
                      </p>
                      <div className="flex gap-2 mt-3">
                        <span className="text-xs bg-zinc-900 text-zinc-400 px-2 py-1 rounded-full">Socket.io</span>
                        <span className="text-xs bg-zinc-900 text-zinc-400 px-2 py-1 rounded-full">Express</span>
                        <span className="text-xs bg-zinc-900 text-zinc-400 px-2 py-1 rounded-full">MongoDB</span>
                      </div>
                      <div className="mt-4">
                        <a href="https://chat-demo.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-zinc-800 text-zinc-200 rounded-lg hover:bg-zinc-700 transition">
                          Live Demo <i className="bx bx-link-external ml-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-[1px] border-zinc-800 rounded-lg p-4 hover:border-zinc-700 transition">
                  <div className="flex flex-col md:flex-row gap-6">
                    <img 
                      src="/dash.png" 
                      alt="Hospital Dashboard Preview"
                      className="w-full md:w-1/3 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-bold text-zinc-300">Hospital Management Dashboard</h3>
                        <div className="flex items-center">
                          <i className="bx bx-time-five text-zinc-400 mr-1"></i>
                          <span className="text-xs text-zinc-400">3 months</span>
                        </div>
                      </div>
                      <p className="text-zinc-400 text-sm mt-2">
                        A comprehensive hospital management system with patient tracking, appointment scheduling, 
                        and medical record management. Features include real-time bed availability monitoring, 
                        staff scheduling, and integrated billing system.
                      </p>
                      <div className="flex gap-2 mt-3">
                        <span className="text-xs bg-zinc-900 text-zinc-400 px-2 py-1 rounded-full">React</span>
                        <span className="text-xs bg-zinc-900 text-zinc-400 px-2 py-1 rounded-full">Node.js</span>
                        <span className="text-xs bg-zinc-900 text-zinc-400 px-2 py-1 rounded-full">PostgreSQL</span>
                        <span className="text-xs bg-zinc-900 text-zinc-400 px-2 py-1 rounded-full">Docker</span>
                      </div>
                      <div className="mt-4">
                        <a href="https://hospital-dash-demo.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-zinc-800 text-zinc-200 rounded-lg hover:bg-zinc-700 transition">
                          Live Demo <i className="bx bx-link-external ml-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Work;
