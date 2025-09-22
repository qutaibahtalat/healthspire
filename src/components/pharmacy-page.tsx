import { motion } from 'motion/react';
import { 
  Plus, 
  Package, 
  Scan, 
  AlertTriangle, 
  TrendingUp, 
  Users,
  BarChart3,
  ShoppingCart,
  Database,
  FileText,
  Settings,
  UserCheck,
  Calendar,
  DollarSign,
  Activity,
  ClipboardList,
  Archive,
  UserCog,
  MessageCircle,
  CheckCircle
} from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';

const pharmacyFeatures = {
  basic: {
    title: "Basic Package",
    price: "Starting from $199/month",
    description: "Essential pharmacy management features for small to medium pharmacies",
    features: [
      { icon: BarChart3, name: "Advanced Dashboard", description: "Real-time pharmacy operations overview with key performance metrics" },
      { icon: ShoppingCart, name: "Point of Sale System", description: "Complete POS solution with barcode scanning and receipt printing" },
      { icon: Package, name: "Inventory Management", description: "Stock tracking, expiry alerts, and automated reorder points" },
      { icon: FileText, name: "Comprehensive Reports", description: "Sales, inventory, and financial reporting with export capabilities" },
      { icon: UserCog, name: "User Management", description: "Role-based access control and staff permission management" },
      { icon: Settings, name: "System Settings", description: "Customizable settings for pharmacy operations and preferences" },
      { icon: Database, name: "20k+ Medicine Database", description: "Comprehensive medicine database with dosage and interaction information" }
    ]
  },
  pro: {
    title: "Pro Package", 
    price: "Starting from $399/month",
    description: "Advanced features for growing pharmacies with comprehensive management needs",
    badge: "Most Popular",
    features: [
      { icon: CheckCircle, name: "All Basic Features", description: "Complete access to all basic package functionality" },
      { icon: Calendar, name: "Daily Reports", description: "Automated daily sales and inventory reports with email delivery" },
      { icon: ClipboardList, name: "Audit Logs", description: "Complete transaction history and user activity tracking" },
      { icon: TrendingUp, name: "Expenses Management", description: "Track operational costs and supplier payments with analytics" },
      { icon: Scan, name: "Prescription Processing", description: "Digital prescription management with doctor verification" },
      { icon: UserCheck, name: "Staff Attendance", description: "Biometric integration and shift management system" },
      { icon: DollarSign, name: "Salary Management", description: "Automated payroll processing with tax calculations" },
      { icon: Activity, name: "Modern Analysis System", description: "Advanced analytics with sales trends and forecasting" },
      { icon: Database, name: "50k+ Medicine Database", description: "Extended medicine database with advanced search capabilities" }
    ]
  },
  advanced: {
    title: "Advanced Package",
    price: "Starting from $699/month", 
    description: "Enterprise-level solution with complete pharmacy ecosystem integration",
    badge: "Enterprise",
    features: [
      { icon: CheckCircle, name: "All Pro Features", description: "Full access to professional package capabilities" },
      { icon: Database, name: "100k+ Medicine Database", description: "Complete medicine database with international drug information" },
      { icon: FileText, name: "Advanced Reporting", description: "Custom report builder with business intelligence dashboards" },
      { icon: Settings, name: "Text Modules", description: "Automated SMS/email notifications for customers and suppliers" },
      { icon: Archive, name: "Supplier Record Management", description: "Complete supplier database with performance tracking" },
      { icon: Users, name: "Credit Customer Management", description: "Customer credit limits, payment tracking, and aging reports" },
      { icon: Package, name: "Returns Management", description: "Customer and supplier return processing with automated refunds" },
      { icon: TrendingUp, name: "Business Intelligence", description: "Advanced analytics with predictive insights and recommendations" }
    ]
  }
};

export function PharmacyPage() {
  const createWhatsAppLink = (packageName: string) => {
    const message = encodeURIComponent(
      `Hello! I'm interested in the ${packageName} package for Pharmacy Management System. Could you please provide more details about pricing and implementation?`
    );
    return `https://wa.me/923296273720?text=${message}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-600 to-blue-200 pt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-white to-blue-100 rounded-3xl flex items-center justify-center shadow-2xl"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Plus className="w-12 h-12 text-blue-600" />
          </motion.div>
          
          <motion.h1 
            className="text-6xl font-bold mb-4 text-white drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Pharmacy Management System
          </motion.h1>
          
          <motion.p 
            className="text-xl text-blue-100 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Advanced pharmacy operations platform that streamlines inventory management, 
            prescription processing, and retail operations for optimal efficiency. Complete solution for modern pharmacies.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {[
              "Complete POS System",
              "100k+ Medicine Database", 
              "Advanced Analytics",
              "Multi-location Support"
            ].map((feature, index) => (
              <motion.div
                key={feature}
                className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-white font-medium text-sm">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {Object.entries(pharmacyFeatures).map(([key, pkg], packageIndex) => (
            <motion.div
              key={key}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: packageIndex * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className={`relative overflow-hidden h-full bg-white/95 backdrop-blur-sm border-2 shadow-2xl ${
                key === 'pro' ? 'border-blue-400 shadow-blue-300/50' : 'border-white/50'
              }`}>
                {pkg.badge && (
                  <motion.div
                    className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: packageIndex * 0.2 + 0.5 }}
                  >
                    {pkg.badge}
                  </motion.div>
                )}
                
                <div className="p-8">
                  <motion.div
                    className="text-center mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: packageIndex * 0.2 + 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-blue-800 mb-2">{pkg.title}</h3>
                    <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-3">
                      {pkg.price}
                    </p>
                    <p className="text-gray-600">{pkg.description}</p>
                  </motion.div>

                  <div className="space-y-4 mb-8">
                    {pkg.features.map((feature, index) => (
                      <motion.div
                        key={feature.name}
                        className="flex items-start space-x-3 group/feature"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: packageIndex * 0.2 + 0.4 + index * 0.05 }}
                        whileHover={{ x: 5 }}
                      >
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/feature:bg-blue-200 transition-colors">
                          <feature.icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 mb-1">{feature.name}</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      className={`w-full py-3 text-lg font-semibold rounded-xl transition-all duration-300 ${
                        key === 'pro'
                          ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg'
                          : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white'
                      }`}
                      onClick={() => window.open(createWhatsAppLink(pkg.title), '_blank')}
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Get {pkg.title} Package
                    </Button>
                  </motion.div>
                </div>

                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Key Benefits Section */}
        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-white/50 mb-16 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent mb-4">
              Why Choose Our Pharmacy Management System?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Streamline your pharmacy operations with cutting-edge technology and proven workflows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "95% Faster Processing",
                description: "Streamlined POS and inventory management reduces transaction time"
              },
              {
                icon: Database,
                title: "100k+ Medicine Database",
                description: "Comprehensive drug database with interactions and dosage information"
              },
              {
                icon: AlertTriangle,
                title: "Zero Stock-outs",
                description: "Automated reorder alerts and expiry management prevent losses"
              },
              {
                icon: Users,
                title: "1000+ Pharmacies Trust Us",
                description: "Proven track record across pharmacy chains worldwide"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-blue-800 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-white/95 backdrop-blur-sm text-blue-900 rounded-3xl p-12 shadow-2xl border border-white/50"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.h3 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
          >
            Optimize Your Pharmacy Operations Today
          </motion.h3>
          <motion.p 
            className="text-xl text-blue-700 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            Join thousands of pharmacies worldwide that trust HEALTHSPIRE for their operations. 
            Transform your pharmacy with our advanced management system.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg"
                onClick={() => window.open(createWhatsAppLink('Pharmacy Management System'), '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Free Demo
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-xl"
                onClick={() => window.open('tel:+923296273720', '_self')}
              >
                📞 Call: +92 329 6273720
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}