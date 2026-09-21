import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Ban, Lock, Award, Scale, Briefcase, ClipboardCheck } from 'lucide-react';

const policies = [
  {
    icon: Ban,
    title: 'Refund & Cancellation Policy',
    content: 'Once enrolment is confirmed and payment is received, the coursework fee of ₹28,000 is strictly non-refundable and non-transferable under any circumstances. Please review all course details, duration, requirements, and eligibility carefully before completing your registration.\n\nThe QABA Board examination fee is fully managed by the QABA Board. Sereniche Academy has no authority over examination fee refunds or related policies. Please contact the QABA Board directly for all exam-related queries.',
  },
  {
    icon: Lock,
    title: 'Privacy Policy',
    content: 'Student information collected during enrolment is used solely for programme administration and QABA application purposes. Sereniche Academy does not share personal data with third parties without explicit consent. All student records are maintained securely for a minimum of 3 years in compliance with QABA requirements.',
  },
  {
    icon: Award,
    title: 'Certificate Issuance Policy',
    content: 'Certificates of Completion are issued to students within 10 business days of successful programme completion. The certificate will include the student\'s full name, programme title, total hours completed, dates of attendance, and the QABA Approved Provider details as required by QABA.',
  },
  {
    icon: Scale,
    title: 'Code of Conduct',
    content: 'All students are expected to maintain professional and ethical conduct throughout the programme. Any breach of academic integrity, professional ethics, or misconduct may result in removal from the programme without refund and may be reported to the QABA Board.',
  },
  {
    icon: Briefcase,
    title: 'Fieldwork Policy',
    content: 'Students are responsible for arranging their own fieldwork placement under a qualified QABA-approved supervisor. Sereniche Academy will provide guidance and integrated fieldwork opportunities through its own schools and allied institutions. Students may utilise these opportunities for an additional fee. Fieldwork must not commence before enrolment in the coursework is confirmed.',
  },
  {
    icon: ClipboardCheck,
    title: 'Examination Policy',
    content: 'The ABAT examination is administered by the QABA Board through their designated proctoring service. Students are responsible for independently registering for the examination, paying the examination fee directly to the QABA Board, and fulfilling all eligibility requirements before registering. Sereniche Academy is not responsible for examination outcomes.',
  },
];

export default function RefundPolicyPage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          to="/courses/applied-behaviour-analysis-technician"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-purple-600 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Course
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-5">
            <ShieldCheck className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-700">Section 8 — Policies</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Refund & Policies</h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Please review all policies carefully before completing your enrolment in the ABAT programme.
          </p>
        </div>

        {/* Policy Cards */}
        <div className="space-y-5 mb-12">
          {policies.map((policy, i) => {
            const Icon = policy.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-7 hover:border-purple-200 transition-colors shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-purple-50 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{policy.title}</h3>
                    {policy.content.split('\n\n').map((paragraph, pi) => (
                      <p key={pi} className="text-gray-600 leading-relaxed mb-2 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </motion.div>
  );
}
