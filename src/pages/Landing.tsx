import { Link } from 'react-router-dom';
import {
  ChatBubbleBottomCenterTextIcon,
  PhotoIcon,
  SparklesIcon,
  CheckIcon,
  ArrowRightIcon,
  BoltIcon,
  ShieldCheckIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'AI Chat Assistant',
    description:
      'Engage in natural conversations with our advanced AI. Get instant responses to your questions and enjoy meaningful interactions.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: 'Image Generation',
    description:
      'Transform your ideas into stunning visuals. Our AI-powered image generation creates unique and creative images from your descriptions.',
    icon: PhotoIcon,
  },
  {
    name: 'Smart Features',
    description:
      "Experience cutting-edge AI capabilities. From natural language processing to creative assistance, we'll help you achieve more.",
    icon: SparklesIcon,
  },
];

const benefits = [
  {
    name: 'Lightning Fast',
    description: 'Get instant responses and generate images in seconds with our optimized AI models.',
    icon: BoltIcon,
  },
  {
    name: 'Secure & Private',
    description: 'Your data is encrypted and protected. We prioritize your privacy and security.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Developer Friendly',
    description: 'Access our AI capabilities through clean and well-documented APIs.',
    icon: CommandLineIcon,
  },
];

const pricingPlans = [
  {
    name: 'Basic',
    price: '$9',
    period: '/month',
    description: 'Perfect for getting started with AI assistance',
    features: [
      'Access to AI Chat',
      '100 messages per day',
      'Basic image generation',
      'Email support',
    ],
    buttonText: 'Start Basic',
    buttonLink: '/signup',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'Best for professionals and growing teams',
    features: [
      'Everything in Basic',
      'Unlimited messages',
      'Advanced image generation',
      'Priority support',
      'Custom AI training',
    ],
    buttonText: 'Go Pro',
    buttonLink: '/signup?plan=pro',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations with custom needs',
    features: [
      'Everything in Pro',
      'Dedicated support',
      'Custom integrations',
      'SLA guarantee',
      'On-premise deployment',
    ],
    buttonText: 'Contact Sales',
    buttonLink: '/contact',
    highlighted: false,
  },
];

export default function Landing() {
  return (
    <div className="relative isolate">
      {/* Background Effects */}
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80b5ff] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* Hero Section */}
      <div className="px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-300 ring-1 ring-gray-700/10 hover:ring-gray-700/20">
                Announcing our next-gen AI features.{' '}
                <Link to="/learn-more" className="font-semibold text-blue-400">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text pb-2">
              Experience the Future with ZENITH - AI
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Unlock the power of artificial intelligence with our cutting-edge
              platform. Chat with AI, generate images, and explore endless
              possibilities.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/signup"
                className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors duration-200 hover:shadow-blue-500/20 hover:shadow-lg"
              >
                Get started for free
              </Link>
              <Link
                to="/learn-more"
                className="group text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200"
              >
                Learn more{' '}
                <ArrowRightIcon className="inline-block w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">
            Powerful Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Everything you need in one place
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our platform combines advanced AI technologies to provide you with a
            comprehensive suite of tools for your creative and professional needs.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative group">
                <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-gray-800/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 rounded-2xl" />
                <div className="relative">
                  <dt className="inline-flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    <feature.icon
                      className="h-5 w-5 flex-none text-blue-400"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <Link
                        to="/learn-more"
                        className="group/link text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300"
                      >
                        Learn more{' '}
                        <ArrowRightIcon className="inline-block w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </p>
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Why Choose ZENITH - AI Section */}
      <div className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why choose ZENITH - AI?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience the future of AI-powered development with features designed to enhance your workflow
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl hover:bg-gray-800/70 transition-all">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                <SparklesIcon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Advanced AI Features</h3>
              <p className="text-gray-400">
                Cutting-edge AI capabilities that understand context and deliver precise solutions
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl hover:bg-gray-800/70 transition-all">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6">
                <BoltIcon className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Lightning Fast</h3>
              <p className="text-gray-400">
                Instant responses and real-time processing for seamless development
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl hover:bg-gray-800/70 transition-all">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-6">
                <ShieldCheckIcon className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Secure & Reliable</h3>
              <p className="text-gray-400">
                Enterprise-grade security with 99.9% uptime guarantee
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Benefits</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We combine cutting-edge technology with user-friendly design to provide the best AI experience.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.name} className="relative group">
                <div className="absolute -inset-y-4 -inset-x-4 z-0 scale-95 bg-gray-800/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 rounded-2xl" />
                <div className="relative flex flex-col gap-6 p-4">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    <benefit.icon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                    {benefit.name}
                  </dt>
                  <dd className="text-base leading-7 text-gray-300">{benefit.description}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Simple, transparent pricing</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Choose the perfect plan for your needs. All plans include access to our core AI features.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl p-8 ring-1 transition-transform duration-300 hover:scale-105 ${
                  plan.highlighted
                    ? 'bg-blue-600/10 ring-blue-500'
                    : 'bg-gray-800/40 ring-gray-700 hover:ring-gray-600'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-4 py-1 text-sm font-semibold text-white">
                    Most Popular
                  </div>
                )}
                <div className="flex flex-col h-full">
                  <div>
                    <h3 className="text-lg font-semibold leading-7 text-white">{plan.name}</h3>
                    <p className="mt-4 text-sm leading-6 text-gray-300">{plan.description}</p>
                    <p className="mt-6 flex items-baseline gap-x-1">
                      <span className="text-4xl font-bold tracking-tight text-white">{plan.price}</span>
                      {plan.period && (
                        <span className="text-sm font-semibold leading-6 text-gray-300">
                          {plan.period}
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="mt-8 space-y-3 flex-grow">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex gap-3">
                        <CheckIcon className="h-6 w-5 flex-none text-blue-400" aria-hidden="true" />
                        <span className="text-sm leading-6 text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to={plan.buttonLink}
                    className={`mt-8 block rounded-lg px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                      plan.highlighted
                        ? 'bg-blue-500 text-white hover:bg-blue-400 focus-visible:outline-blue-500'
                        : 'bg-gray-700 text-white hover:bg-gray-600 focus-visible:outline-gray-700'
                    }`}
                  >
                    {plan.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
