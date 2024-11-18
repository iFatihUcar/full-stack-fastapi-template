import { Box, Flex, Icon, Text, useColorModeValue, VStack, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import {
  FiHome,
  FiUsers,
  FiBarChart2,
  FiPieChart,
  FiSettings,
  FiLogOut,
  FiHelpCircle,
  FiDatabase,
  FiDollarSign,
  FiClock,
  FiCalendar,
  FiUserX,
  FiRefreshCw,
  FiUserCheck,
  FiAlertCircle,
  FiTrendingUp,
  FiActivity,
  FiBriefcase,
  FiGitBranch,
  FiList,
  FiLock,
  FiCreditCard,
  FiFileText,
  FiTrendingDown
} from "react-icons/fi";

const mainMenuItems = [
  {
    title: "Ana Sayfa",
    path: "/ana-sayfa",
    moduleCode: "active_employees",
    code: "active_employees",
    icon: FiHome
  },
  {
    title: "Çeşitlilik & Kapsam",
    path: "/cesitlilik",
    moduleCode: "active_employees",
    code: "diversity",
    icon: FiUsers
  },
  {
    title: "İşe Alım",
    path: "/ise-alim",
    moduleCode: "active_employees",
    code: "hiring",
    icon: FiBriefcase
  },
  {
    title: "Cinsiyet Dağılımı",
    path: "/cinsiyet-dagilimi",
    moduleCode: "active_employees",
    code: "montlygenderstat",
    icon: FiUsers
  },
  {
    title: "İşten Ayrılanlar",
    path: "/isten-ayrilanlar",
    moduleCode: "leavers_employee",
    code: "leavers_employee",
    icon: FiUserX
  },
  {
    title: "Turnover",
    path: "/turnover",
    moduleCode: "leavers_employee",
    code: "turnover",
    icon: FiRefreshCw
  },
  {
    title: "Tutundurma",
    path: "/tutundurma",
    moduleCode: "leavers_employee",
    code: "retention",
    icon: FiUserCheck
  },
  {
    title: "Fazla Mesai",
    path: "/fazla-mesai",
    moduleCode: "overtime",
    code: "overtime",
    icon: FiClock
  },
  {
    title: "Yıllık İzin",
    path: "/yillik-izin",
    moduleCode: "annual_leaves",
    code: "annual_leaves",
    icon: FiCalendar
  },
  {
    title: "Devamsızlık",
    path: "/devamsizlik",
    moduleCode: "absenteeism",
    code: "absenteeism",
    icon: FiAlertCircle
  },
  {
    title: "Çalışan Maliyeti",
    path: "/calisan-maliyeti",
    moduleCode: "COD",
    code: "COD",
    icon: FiDollarSign
  },
];

const bordroItems = [
  {
    title: "Bordro",
    path: "/bordro",
    moduleCode: "PYRA",
    code: "Payroll",
    icon: FiFileText
  },
  {
    title: "Fazla Mesai Maliyeti",
    path: "/fazla-mesai-maliyeti",
    moduleCode: "PYRA",
    code: "overtimepayroll",
    icon: FiClock
  },
  {
    title: "Yıllık İzin Maliyeti",
    path: "/yillik-izin-maliyeti",
    moduleCode: "PYRA",
    code: "annualleavespayroll",
    icon: FiCalendar
  },
  {
    title: "Kazanılmış Faydalar",
    path: "/kazanilmis-faydalar",
    moduleCode: "PYRA",
    code: "supportpayroll",
    icon: FiTrendingUp
  },
  {
    title: "Ek Ödemeler",
    path: "/ek-odemeler",
    moduleCode: "PYRA",
    code: "additionalpayroll",
    icon: FiDollarSign
  },
];

const tahminItems = [
  {
    title: "Kadın Çalışan Tahmini",
    path: "/kadin-calisan-tahmini",
    moduleCode: "GenderPredict",
    code: "GenderPredictions",
    icon: FiActivity
  },
  {
    title: "KPI Tahmini",
    path: "/kpi-tahmini",
    moduleCode: "Predict",
    code: "Predictions",
    icon: FiTrendingUp
  },
  {
    title: "Korelasyon Analizi",
    path: "/korelasyon-analizi",
    moduleCode: "correlation_metrics",
    code: "correlation_metrics",
    icon: FiActivity
  },
];

const organizasyonItems = [
  {
    title: "Organizasyon Şeması",
    path: "/orgChart",
    icon: FiGitBranch
  },
  {
    title: "Çalışan Listesi",
    path: "/orgChart/list",
    icon: FiList
  },
];

const ayarlarItems = [
  {
    title: "Dashboard",
    path: "/",
    icon: FiHome
  },
  {
    title: "Items",
    path: "/items",
    icon: FiList
  },
  {
    title: "User Settings",
    path: "/settings",
    icon: FiSettings
  },
  {
    title: "Şifre Değiştir",
    path: "/settings/ChangePassword",
    icon: FiLock
  },
  {
    title: "Kullanıcılar",
    path: "/settings/users",
    icon: FiUsers
  },
  {
    title: "Şirket Bilgileri",
    path: "/settings/billing",
    icon: FiBriefcase
  },
  {
    title: "Faturalar",
    path: "/settings/payment",
    icon: FiCreditCard
  },
];

const sections = [
  {
    icon: FiBarChart2,
    title: "İK Analitiği",
    items: mainMenuItems,
  },
  {
    icon: FiPieChart,
    title: "Bordro Analitiği",
    items: bordroItems,
  },
  {
    icon: FiBarChart2,
    title: "Tahmin Analitiği",
    items: tahminItems,
  },
  {
    icon: FiUsers,
    title: "Organizasyon",
    items: organizasyonItems,
  },
  {
    icon: FiSettings,
    title: "Ayarlar",
    items: ayarlarItems,
  },
];

interface SidebarProps {
  onClose?: () => void;
}

const Sidebar = ({ onClose }: SidebarProps) => {
  const queryClient = useQueryClient();
  const textColor = useColorModeValue("gray.700", "white");
  const bgActive = useColorModeValue("gray.100", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Flex
      direction="column"
      h="100vh"
      w="64"
      bg={useColorModeValue("white", "gray.800")}
      borderRight="1px"
      borderColor={borderColor}
      className="list-group mt-3"
    >
      {/* Logo Area */}
      <Box p={4} borderBottom="1px" borderColor={borderColor}>
        <Text fontSize="xl" fontWeight="bold">
          peopleoma
        </Text>
      </Box>

      {/* Veri Entegrasyonu */}
      <Link to="/inproductonboard" className="mainMenu menu-dark">
        <Flex p={4} borderBottom="1px" borderColor={borderColor} align="center">
          <Icon as={FiDatabase} mr={2} />
          <Text>Veri Entegrasyonu</Text>
        </Flex>
      </Link>

      {/* Main Navigation */}
      <Box flex="1" overflowY="auto">
        <Accordion allowMultiple defaultIndex={[0, 1, 2, 3, 4]}>
          {sections.map((section, idx) => (
            <AccordionItem key={idx} border="none">
              <AccordionButton
                py={4}
                _hover={{ bg: bgActive }}
                color={textColor}
                className="mainMenu menu-dark"
              >
                <Flex align="center" flex="1">
                  <Icon as={section.icon} mr={2} />
                  <Text>{section.title}</Text>
                </Flex>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} px={0}>
                <VStack align="stretch" spacing={1}>
                  {section.items.map((item) => (
                    <Flex
                      key={item.path}
                      as={Link}
                      to={item.path}
                      p={2}
                      pl={10}
                      align="center"
                      justify="space-between"
                      _hover={{ bg: bgActive }}
                      onClick={onClose}
                      className="subMenu list-group-item list-group-item-action menu-dark text-secondary"
                      data-module-code={item.moduleCode}
                      data-code={item.code}
                    >
                      <Flex align="center">
                        <Icon as={item.icon} mr={2} />
                        <Text fontSize="sm">{item.title}</Text>
                      </Flex>
                    </Flex>
                  ))}
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>

      {/* Footer */}
      <Flex
        p={4}
        borderTop="1px"
        borderColor={borderColor}
        justify="space-between"
      >
        <Icon
          as={FiLogOut}
          cursor="pointer"
          _hover={{ color: "blue.500" }}
        />
        <Icon
          as={FiHelpCircle}
          cursor="pointer"
          _hover={{ color: "blue.500" }}
        />
      </Flex>
    </Flex>
  );
};

export default Sidebar;