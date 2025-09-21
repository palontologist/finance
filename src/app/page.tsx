'use client';

import { useState } from "react";
import {
  ArrowRight,
  Menu,
  X,
  TrendingUp,
  Zap,
  Shield,
  Target,
  Brain,
  BarChart3,
  DollarSign,
  Sparkles
} from "lucide-react";

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      data-oid="_ozo17.">

      {/* Header */}
      <header
        className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-white/10"
        data-oid="qnkf4k7">

        <div className="container mx-auto px-6 py-4" data-oid="bqlj3vo">
          <div className="flex items-center justify-between" data-oid="6njaxr1">
            <div className="flex items-center space-x-3" data-oid="iv7c98r">
              <div
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg"
                data-oid="qn2lejd">

                <Brain className="w-6 h-6 text-white" data-oid="us:hclr" />
              </div>
              <span
                className="text-2xl font-bold text-white"
                data-oid="rj7b8bf">

                Mantra
                <span className="text-purple-400" data-oid="zk.yjou">
                  Pro
                </span>
              </span>
            </div>

            <nav
              className="hidden md:flex items-center space-x-8"
              data-oid="u6.tssl">

              <a
                href="#services"
                className="text-white/80 hover:text-purple-400 transition-colors font-medium"
                data-oid="b3yo4_y">

                Services
              </a>
              <a
                href="#solutions"
                className="text-white/80 hover:text-purple-400 transition-colors font-medium"
                data-oid="ff60ui:">

                Solutions
              </a>
              <a
                href="#about"
                className="text-white/80 hover:text-purple-400 transition-colors font-medium"
                data-oid="jnn8l8z">

                About
              </a>
              <a
                href="#contact"
                className="text-white/80 hover:text-purple-400 transition-colors font-medium"
                data-oid="i1:m.n3">

                Contact
              </a>
            </nav>

            <div
              className="hidden md:flex items-center space-x-4"
              data-oid="ics48u1">

              <button
                className="text-white/80 hover:text-white transition-colors px-4 py-2"
                data-oid="evsptcv">

                Sign In
              </button>
              <button
                className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 shadow-lg"
                data-oid="353oxlf">

                Get Started
              </button>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-oid=":-c36d3">

              {isMenuOpen ?
              <X className="w-6 h-6" data-oid=":w3_r:a" /> :

              <Menu className="w-6 h-6" data-oid="u_aeilq" />
              }
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen &&
      <div
        className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl md:hidden"
        data-oid="57hshab">

          <div className="pt-20 px-6" data-oid="lgse5:6">
            <nav className="flex flex-col space-y-8" data-oid="mh06u_9">
              <a
              href="#services"
              className="text-2xl font-bold text-white hover:text-purple-400 transition-colors"
              data-oid="h:cbddq">

                Services
              </a>
              <a
              href="#solutions"
              className="text-2xl font-bold text-white hover:text-purple-400 transition-colors"
              data-oid="hu4or0:">

                Solutions
              </a>
              <a
              href="#about"
              className="text-2xl font-bold text-white hover:text-purple-400 transition-colors"
              data-oid="gm_mpei">

                About
              </a>
              <a
              href="#contact"
              className="text-2xl font-bold text-white hover:text-purple-400 transition-colors"
              data-oid="4rz9fc-">

                Contact
              </a>
              <div className="pt-8 space-y-4" data-oid="a8rnfgr">
                <button
                className="w-full text-white/80 hover:text-white transition-colors px-4 py-3 border border-white/20 rounded-lg"
                data-oid="u3gww3h">

                  Sign In
                </button>
                <button
                className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-3 rounded-lg"
                data-oid="kl1205k">

                  Get Started
                </button>
              </div>
            </nav>
          </div>
        </div>
      }

      {/* Hero Section */}
      <section
        className="pt-32 pb-20 px-6 relative overflow-hidden"
        data-oid="u4a-qw1">

        <div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 animate-pulse"
          data-oid=".tb6gcw" />


        <div className="container mx-auto relative z-10" data-oid="48gkddl">
          <div
            className="grid lg:grid-cols-2 gap-16 items-center"
            data-oid="7bd:b74">

            <div className="space-y-8" data-oid="_roqq70">
              <div className="space-y-6" data-oid="vrar298">
                <div
                  className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-300 px-4 py-2 rounded-full border border-purple-500/20"
                  data-oid="flmhc.r">

                  <Sparkles className="w-4 h-4" data-oid="2y5m76p" />
                  AI-Powered Financial Intelligence
                </div>
                <h1
                  className="text-6xl md:text-8xl font-bold leading-tight text-white"
                  data-oid="k4nb607">

                  Revolutionize Your
                  <span
                    className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                    data-oid="4-9lic8">

                    Financial Future
                  </span>
                </h1>
                <p
                  className="text-xl text-gray-300 leading-relaxed max-w-2xl"
                  data-oid="avzcw09">

                  Transform your business finances with cutting-edge AI
                  solutions. Streamline operations, maximize profits, and make
                  data-driven decisions that propel your company forward.
                </p>
              </div>

              <div
                className="flex flex-col sm:flex-row gap-4"
                data-oid="3.0gq1x">

                <button
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 shadow-xl flex items-center justify-center group"
                  data-oid="lvwzqam">

                  Start Your Transformation
                  <ArrowRight
                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                    data-oid="pst4qcu" />

                </button>
                <button
                  className="border border-white/20 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/5 transition-all duration-300"
                  data-oid="k4did:6">

                  Watch Demo
                </button>
              </div>

              <div
                className="flex items-center space-x-12 pt-8"
                data-oid="c2kdr5y">

                <div className="text-center" data-oid="n-aefps">
                  <div
                    className="text-4xl font-bold text-purple-400"
                    data-oid="oefo.gj">

                    500+
                  </div>
                  <div className="text-sm text-gray-400" data-oid=":b-_9xh">
                    Businesses Transformed
                  </div>
                </div>
                <div className="text-center" data-oid="tt6rfvf">
                  <div
                    className="text-4xl font-bold text-cyan-400"
                    data-oid="sd9aoev">

                    $2.5M
                  </div>
                  <div className="text-sm text-gray-400" data-oid="ah9aajx">
                    Average Savings
                  </div>
                </div>
                <div className="text-center" data-oid="wj145xe">
                  <div
                    className="text-4xl font-bold text-green-400"
                    data-oid="dcfxcgf">

                    98%
                  </div>
                  <div className="text-sm text-gray-400" data-oid="irwk.oa">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>

            <div className="relative" data-oid="8pt752n">
              <div className="relative z-10 animate-float" data-oid="4ltg0y7">
                <div
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl"
                  data-oid="e:44m:l">

                  <div className="space-y-6" data-oid="ommi03b">
                    <div
                      className="flex items-center justify-between"
                      data-oid="wmml.b.">

                      <h3
                        className="text-xl font-semibold text-white"
                        data-oid="4m058z8">

                        Financial Performance
                      </h3>
                      <div
                        className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm border border-green-500/20"
                        data-oid="rgyobc2">

                        +47% Growth
                      </div>
                    </div>
                    <div className="space-y-4" data-oid="k27my-.">
                      <div
                        className="flex items-center justify-between"
                        data-oid="w8qwbkk">

                        <span className="text-gray-300" data-oid="dochhut">
                          Revenue Optimization
                        </span>
                        <div
                          className="flex items-center space-x-3"
                          data-oid="t5lug92">

                          <div
                            className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden"
                            data-oid="ywza14h">

                            <div
                              className="w-20 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-pulse"
                              data-oid="hy_0dmq">
                            </div>
                          </div>
                          <span
                            className="text-sm font-medium text-white"
                            data-oid="cnthm8:">

                            85%
                          </span>
                        </div>
                      </div>
                      <div
                        className="flex items-center justify-between"
                        data-oid="16tifcm">

                        <span className="text-gray-300" data-oid="z4iylac">
                          Cost Reduction
                        </span>
                        <div
                          className="flex items-center space-x-3"
                          data-oid="ljy7tr_">

                          <div
                            className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden"
                            data-oid="x7m:ism">

                            <div
                              className="w-18 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                              data-oid="6r8xvsk">
                            </div>
                          </div>
                          <span
                            className="text-sm font-medium text-white"
                            data-oid="a:ff8qk">

                            72%
                          </span>
                        </div>
                      </div>
                      <div
                        className="flex items-center justify-between"
                        data-oid="2q46uy-">

                        <span className="text-gray-300" data-oid="-.e.zka">
                          Process Automation
                        </span>
                        <div
                          className="flex items-center space-x-3"
                          data-oid="3i.abcu">

                          <div
                            className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden"
                            data-oid="we9fem.">

                            <div
                              className="w-22 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                              data-oid="y.whyd8">
                            </div>
                          </div>
                          <span
                            className="text-sm font-medium text-white"
                            data-oid="w6lg3o6">

                            91%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="absolute -top-8 -right-8 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
                data-oid="0qtwa2w">
              </div>
              <div
                className="absolute -bottom-8 -left-8 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
                data-oid="wncvm88">
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section
        id="services"
        className="py-24 px-6 bg-black/20 backdrop-blur-xl"
        data-oid="b_4v-16">

        <div className="container mx-auto" data-oid="cmly:85">
          <div className="text-center space-y-6 mb-20" data-oid="hyly2:f">
            <div
              className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-300 px-4 py-2 rounded-full border border-cyan-500/20"
              data-oid="xf19s4.">

              Our Expertise
            </div>
            <h2
              className="text-5xl md:text-6xl font-bold text-white"
              data-oid="gdld82z">

              AI-Powered Financial Solutions
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="g8z8ji_">

              Comprehensive suite of AI tools designed to optimize every aspect
              of your financial operations
            </p>
          </div>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-oid="qdn2qbg">

            {[
            {
              icon: <TrendingUp className="w-8 h-8" data-oid="1lznpe:" />,
              title: "Predictive Analytics",
              description:
              "Forecast financial trends and market opportunities with 95% accuracy using advanced machine learning algorithms.",
              color: "from-purple-500 to-pink-500"
            },
            {
              icon: <Zap className="w-8 h-8" data-oid="63a4t78" />,
              title: "Process Automation",
              description:
              "Automate repetitive financial tasks, reducing manual work by 80% and eliminating human error.",
              color: "from-cyan-500 to-blue-500"
            },
            {
              icon: <Shield className="w-8 h-8" data-oid="_mh8zay" />,
              title: "Risk Management",
              description:
              "Identify and mitigate financial risks in real-time with AI-powered monitoring and alerts.",
              color: "from-green-500 to-emerald-500"
            },
            {
              icon: <Target className="w-8 h-8" data-oid="00l:2v_" />,
              title: "Strategic Planning",
              description:
              "Data-driven strategic recommendations that align with your business goals and market conditions.",
              color: "from-orange-500 to-red-500"
            },
            {
              icon: <BarChart3 className="w-8 h-8" data-oid=":mnl_ga" />,
              title: "Performance Optimization",
              description:
              "Maximize ROI through intelligent resource allocation and performance tracking.",
              color: "from-violet-500 to-purple-500"
            },
            {
              icon: <DollarSign className="w-8 h-8" data-oid="gx45pjr" />,
              title: "Cost Intelligence",
              description:
              "Identify cost-saving opportunities and optimize spending across all business operations.",
              color: "from-teal-500 to-cyan-500"
            }].
            map((service, index) =>
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group hover:scale-105 hover:shadow-2xl"
              data-oid="la-gzs6">

                <div className="space-y-6" data-oid=".:8hi36">
                  <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  data-oid="-r6-1ac">

                    {service.icon}
                  </div>
                  <h3
                  className="text-2xl font-semibold text-white"
                  data-oid="f8nllsz">

                    {service.title}
                  </h3>
                  <p
                  className="text-gray-300 leading-relaxed"
                  data-oid="t7ra4g3">

                    {service.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6" data-oid="ygbs7i1">
        <div className="container mx-auto" data-oid="u2i7jw.">
          <div
            className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-xl border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden"
            data-oid="f6x7mvi">

            <div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 animate-pulse"
              data-oid="_6gux-z" />


            <div
              className="space-y-8 max-w-4xl mx-auto relative z-10"
              data-oid="d9px4.v">

              <h2
                className="text-5xl md:text-6xl font-bold text-white"
                data-oid="kld0ly2">

                Ready to Transform Your Financial Operations?
              </h2>
              <p className="text-xl text-gray-300" data-oid="eoz7p2p">
                Join hundreds of businesses that have revolutionized their
                financial processes with our AI solutions. Get started with a
                free consultation today.
              </p>
              <div
                className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
                data-oid="n771l7f">

                <button
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 shadow-xl flex items-center justify-center group"
                  data-oid="1vyg61k">

                  Schedule Free Consultation
                  <ArrowRight
                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                    data-oid="f-1ev.i" />

                </button>
                <button
                  className="border border-white/20 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all duration-300"
                  data-oid="xgf4x4g">

                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-20 px-6 bg-black/40 backdrop-blur-xl border-t border-white/10"
        data-oid="s3_.xpi">

        <div className="container mx-auto" data-oid="-fqnf-b">
          <div className="grid md:grid-cols-4 gap-12" data-oid="yp81n25">
            <div className="space-y-6" data-oid="zk_2g2-">
              <div className="flex items-center space-x-3" data-oid="4.sb61k">
                <div
                  className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center"
                  data-oid="nrh517k">

                  <Brain className="w-6 h-6 text-white" data-oid="xlb5_pw" />
                </div>
                <span
                  className="text-2xl font-bold text-white"
                  data-oid="4r63yxu">

                  Mantra
                  <span className="text-purple-400" data-oid="fzdi0bm">
                    Pro
                  </span>
                </span>
              </div>
              <p className="text-gray-300" data-oid="zt-z7x3">
                Revolutionizing business finances through cutting-edge AI
                solutions.
              </p>
            </div>

            <div className="space-y-6" data-oid="t-d3.8b">
              <h4
                className="font-semibold text-white text-lg"
                data-oid="ix17rr5">

                Services
              </h4>
              <div className="space-y-3 text-gray-300" data-oid="spdnwnt">
                <div
                  className="hover:text-purple-400 transition-colors cursor-pointer"
                  data-oid="l1odir4">

                  Predictive Analytics
                </div>
                <div
                  className="hover:text-purple-400 transition-colors cursor-pointer"
                  data-oid=".g9w80m">

                  Process Automation
                </div>
                <div
                  className="hover:text-purple-400 transition-colors cursor-pointer"
                  data-oid="2xw:1ct">

                  Risk Management
                </div>
                <div
                  className="hover:text-purple-400 transition-colors cursor-pointer"
                  data-oid="a2:e0n7">

                  Strategic Planning
                </div>
              </div>
            </div>

            <div className="space-y-6" data-oid=":zfhsl.">
              <h4
                className="font-semibold text-white text-lg"
                data-oid="p82naqj">

                Company
              </h4>
              <div className="space-y-3 text-gray-300" data-oid="99orrs-">
                <div
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                  data-oid="iiv2-9l">

                  About Us
                </div>
                <div
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                  data-oid="c-5_.et">

                  Case Studies
                </div>
                <div
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                  data-oid="o:38qx5">

                  Careers
                </div>
                <div
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                  data-oid="x.8yv6i">

                  Contact
                </div>
              </div>
            </div>

            <div className="space-y-6" data-oid="rxwh6fq">
              <h4
                className="font-semibold text-white text-lg"
                data-oid="-d86aaf">

                Connect
              </h4>
              <div className="space-y-3 text-gray-300" data-oid="wve-fm3">
                <div
                  className="hover:text-purple-400 transition-colors cursor-pointer"
                  data-oid="gtxo:4n">

                  LinkedIn
                </div>
                <div
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                  data-oid="8cjgigw">

                  Twitter
                </div>
                <div
                  className="hover:text-purple-400 transition-colors cursor-pointer"
                  data-oid="k5no02k">

                  Blog
                </div>
                <div
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                  data-oid="gqvl9:a">

                  Newsletter
                </div>
              </div>
            </div>
          </div>

          <div
            className="border-t border-white/10 mt-16 pt-8 text-center text-gray-400"
            data-oid="5ehgd1r">

            <p data-oid="9-bynna">
              &copy; 2024 MantraPro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
