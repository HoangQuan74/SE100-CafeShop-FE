import { TodayResultData } from "@/hooks/dashboard/useGetTodayResult";

interface TodayResultProps {
    todayResult: TodayResultData;
}

export default function TodayResult({ todayResult }: TodayResultProps) {
    // Format number to currency format (ex: 100000 -> 100,000) , en-US locale
    function formatNumberToCurrency(number: number) {
        return new Intl.NumberFormat("en-US").format(number);
    }

    return (
        <div className="flex h-[12.4375rem] w-full flex-col items-start justify-start rounded-md bg-white py-[2.38rem] px-[3.85rem] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            <h1 className="select-none font-sans text-[1.5rem] font-bold">KẾT QUẢ HÔM NAY</h1>
            <div className="mt-[0.81rem] flex h-full w-full flex-row items-center justify-between">
                {/* Bill Completed  Component */}
                <div className="flex h-full w-[14.639rem] flex-row items-center justify-between">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 63 50"
                        fill="none"
                        className="h-[3.125rem] w-[3.90844rem]"
                    >
                        <path
                            d="M31.5379 36.8705C32.6397 36.8705 33.5412 36.0611 33.5412 35.0719V34.1727H34.2424C37.5479 34.1727 40.3526 31.7446 40.3526 28.777C40.3526 25.8093 37.6481 23.3813 34.2424 23.3813H29.0337C27.9319 23.3813 26.9302 22.5719 26.9302 21.5827C26.9302 20.5935 27.8317 19.7842 29.0337 19.7842H37.3476C38.4494 19.7842 39.3509 18.9748 39.3509 17.9856C39.3509 16.9964 38.4494 16.187 37.3476 16.187H33.5412V15.2878C33.5412 14.2985 32.6397 13.4892 31.5379 13.4892C30.4361 13.4892 29.5346 14.2985 29.5346 15.2878V16.187H29.0337C25.7282 16.187 22.9236 18.6151 22.9236 21.5827C22.9236 24.5504 25.6281 26.9784 29.0337 26.9784H34.2424C35.3442 26.9784 36.3459 27.7878 36.3459 28.777C36.3459 29.7662 35.4444 30.5755 34.2424 30.5755H25.6281C24.5262 30.5755 23.6247 31.3849 23.6247 32.3741C23.6247 33.3633 24.5262 34.1727 25.6281 34.1727H29.4344V35.0719C29.5346 36.0611 30.4361 36.8705 31.5379 36.8705Z"
                            fill="#005B6F"
                        />
                        <path
                            d="M31.5379 36.8705C32.6397 36.8705 33.5412 36.0611 33.5412 35.0719V34.1727H34.2424C37.5479 34.1727 40.3526 31.7446 40.3526 28.777C40.3526 25.8093 37.6481 23.3813 34.2424 23.3813H29.0337C27.9319 23.3813 26.9302 22.5719 26.9302 21.5827C26.9302 20.5935 27.8317 19.7842 29.0337 19.7842H37.3476C38.4494 19.7842 39.3509 18.9748 39.3509 17.9856C39.3509 16.9964 38.4494 16.187 37.3476 16.187H33.5412V15.2878C33.5412 14.2985 32.6397 13.4892 31.5379 13.4892C30.4361 13.4892 29.5346 14.2985 29.5346 15.2878V16.187H29.0337C25.7282 16.187 22.9236 18.6151 22.9236 21.5827C22.9236 24.5504 25.6281 26.9784 29.0337 26.9784H34.2424C35.3442 26.9784 36.3459 27.7878 36.3459 28.777C36.3459 29.7662 35.4444 30.5755 34.2424 30.5755H25.6281C24.5262 30.5755 23.6247 31.3849 23.6247 32.3741C23.6247 33.3633 24.5262 34.1727 25.6281 34.1727H29.4344V35.0719C29.5346 36.0611 30.4361 36.8705 31.5379 36.8705Z"
                            stroke="#005B6F"
                        />
                        <path
                            d="M7.69832 24.8202C8.19916 24.8202 8.59982 24.6403 8.90032 24.4604L16.0122 19.4245C16.9137 18.795 17.0138 17.7158 16.3127 16.9065C15.6115 16.0971 14.4095 16.0072 13.508 16.6367L9.90199 19.2446C12.4062 10.0719 21.5213 3.68705 31.9386 3.68705C42.4561 3.68705 51.5713 10.0719 54.1756 19.2446C54.4761 20.2338 55.578 20.7734 56.5796 20.5036C57.6814 20.2338 58.2824 19.2446 57.9819 18.3453C54.977 7.55396 44.159 0 31.8385 0C19.6181 0 9.00049 7.3741 5.89533 17.9856L3.69166 15.1978C2.99049 14.3885 1.7885 14.2086 0.886997 14.8381C-0.0145027 15.4676 -0.214836 16.5468 0.48633 17.3561L6.09566 24.1007C6.39616 24.4604 6.89699 24.7302 7.39782 24.8202H7.69832Z"
                            fill="#005B6F"
                        />
                        <path
                            d="M7.69832 24.8202C8.19916 24.8202 8.59982 24.6403 8.90032 24.4604L16.0122 19.4245C16.9137 18.795 17.0138 17.7158 16.3127 16.9065C15.6115 16.0971 14.4095 16.0072 13.508 16.6367L9.90199 19.2446C12.4062 10.0719 21.5213 3.68705 31.9386 3.68705C42.4561 3.68705 51.5713 10.0719 54.1756 19.2446C54.4761 20.2338 55.578 20.7734 56.5796 20.5036C57.6814 20.2338 58.2824 19.2446 57.9819 18.3453C54.977 7.55396 44.159 0 31.8385 0C19.6181 0 9.00049 7.3741 5.89533 17.9856L3.69166 15.1978C2.99049 14.3885 1.7885 14.2086 0.886997 14.8381C-0.0145027 15.4676 -0.214836 16.5468 0.48633 17.3561L6.09566 24.1007C6.39616 24.4604 6.89699 24.7302 7.39782 24.8202H7.69832Z"
                            stroke="#005B6F"
                        />
                        <path
                            d="M62.3893 36.6007L58.4828 28.9568C58.2824 28.5072 57.8818 28.1475 57.2808 27.9676C56.7799 27.7878 56.1789 27.8777 55.6781 28.0576L47.5646 31.6547C46.563 32.1043 46.1623 33.1835 46.6631 34.0827C47.164 34.982 48.366 35.3417 49.3676 34.8921L53.3743 33.1835C49.9686 41.1871 41.5546 46.4928 31.9386 46.4928C22.0221 46.4928 13.4078 40.8273 10.3027 32.3741C10.0022 31.4748 8.80015 30.9353 7.79849 31.205C6.79682 31.4748 6.19582 32.554 6.49632 33.4532C10.1023 43.3453 20.3193 50 31.9386 50C43.0571 50 52.9736 43.8849 56.9803 34.6223L58.6831 38.0396C58.9836 38.6691 59.7849 39.1187 60.4861 39.1187C60.7866 39.1187 61.0871 39.0288 61.2874 38.9389C62.4894 38.5791 62.8901 37.5 62.3893 36.6007Z"
                            fill="#005B6F"
                        />
                        <path
                            d="M62.3893 36.6007L58.4828 28.9568C58.2824 28.5072 57.8818 28.1475 57.2808 27.9676C56.7799 27.7878 56.1789 27.8777 55.6781 28.0576L47.5646 31.6547C46.563 32.1043 46.1623 33.1835 46.6631 34.0827C47.164 34.982 48.366 35.3417 49.3676 34.8921L53.3743 33.1835C49.9686 41.1871 41.5546 46.4928 31.9386 46.4928C22.0221 46.4928 13.4078 40.8273 10.3027 32.3741C10.0022 31.4748 8.80015 30.9353 7.79849 31.205C6.79682 31.4748 6.19582 32.554 6.49632 33.4532C10.1023 43.3453 20.3193 50 31.9386 50C43.0571 50 52.9736 43.8849 56.9803 34.6223L58.6831 38.0396C58.9836 38.6691 59.7849 39.1187 60.4861 39.1187C60.7866 39.1187 61.0871 39.0288 61.2874 38.9389C62.4894 38.5791 62.8901 37.5 62.3893 36.6007Z"
                            stroke="#005B6F"
                        />
                    </svg>
                    <div className="flex h-full flex-col items-start justify-start">
                        <p className="select-none font-sans text-[1rem] font-bold">
                            {todayResult.total_invoice_yesterday} đơn đã xong
                        </p>
                        <p className="select-none font-sans text-[2.25rem] font-bold text-[#005B6F]">
                            {formatNumberToCurrency(todayResult.total_income_today)} đ
                        </p>
                        <p className="select-none font-sans text-[1rem] font-normal">
                            Hôm qua {formatNumberToCurrency(todayResult.total_income_yesterday)} đ
                        </p>
                    </div>
                </div>
                {/* Bill Serving Component */}
                <div className="flex h-fit w-[14.639rem] flex-row items-center justify-between">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 56 54"
                        fill="none"
                        className="h-[3.37306rem] w-[3.42344rem]"
                    >
                        <path
                            d="M30.327 18.8807V19.3807H30.827H32.577C33.4453 19.3807 34.0895 20.0259 34.0895 20.8636C34.0895 21.6874 33.3721 22.3465 32.577 22.3465H26.102C25.2045 22.3465 24.2895 23.015 24.2895 23.9673C24.2895 24.9196 25.2045 25.5881 26.102 25.5881H30.477C33.1055 25.5881 35.2317 27.6246 35.3144 30.0964C35.3101 32.4773 33.3541 34.4327 30.8827 34.5898L30.4145 34.6196V35.0888C30.4145 35.8402 29.7703 36.4855 28.9895 36.4855C28.2086 36.4855 27.5645 35.8402 27.5645 35.0888V34.5888H27.0645H23.2145C22.3461 34.5888 21.702 33.9436 21.702 33.1059C21.702 32.2821 22.4193 31.623 23.2145 31.623H30.5645C31.4619 31.623 32.377 30.9545 32.377 30.0022C32.377 29.0499 31.4619 28.3814 30.5645 28.3814H26.1895C23.5543 28.3814 21.4395 26.3405 21.4395 23.8811C21.4395 21.4216 23.5543 19.3807 26.1895 19.3807H26.977H27.477V18.8807C27.477 18.1292 28.1211 17.484 28.902 17.484C29.6828 17.484 30.327 18.1292 30.327 18.8807Z"
                            fill="#12582E"
                            stroke="#12582E"
                        />
                        <path
                            d="M48.6167 25.1368L48.6609 25.588H49.1143H53.6643C54.0546 25.588 54.4412 25.75 54.7302 26.0096C55.0207 26.2706 55.1768 26.5958 55.1768 26.8985C55.1768 27.7223 54.4595 28.3814 53.6643 28.3814H49.2893H48.8359L48.7917 28.8327C47.853 38.4177 40.084 46.0795 30.342 47.0057L29.8893 47.0488V47.5035V51.9866C29.8893 52.8104 29.172 53.4695 28.3768 53.4695C27.5225 53.4695 26.8643 52.7521 26.8643 51.9866V47.6759V47.2212L26.4117 47.1782C16.6697 46.252 8.90065 38.5902 7.96197 29.0051L7.91778 28.5539H7.46435H2.91435C2.06006 28.5539 1.40186 27.8365 1.40186 27.071C1.40186 26.2471 2.11921 25.588 2.91435 25.588H7.46435H7.91778L7.96197 25.1368C8.90077 15.5505 16.671 7.88962 26.3246 6.96371L26.7768 6.92033V6.46599V1.9829C26.7768 1.15909 27.4942 0.5 28.2893 0.5C29.1436 0.5 29.8018 1.21737 29.8018 1.9829V6.46599V6.92033L30.2541 6.96371C39.9077 7.88962 47.6779 15.5505 48.6167 25.1368ZM29.8018 43.6239V44.1885L30.3623 44.1202C38.3726 43.1447 44.6813 36.935 45.673 29.0299L45.7435 28.4676H45.1768H44.4768C43.6225 28.4676 42.9643 27.7503 42.9643 26.9847C42.9643 26.1609 43.6817 25.5018 44.4768 25.5018H45.1768H45.7371L45.6736 24.9452C44.7716 17.0355 38.3714 10.7359 30.3569 9.84862L29.8018 9.78718V10.3456V11.0353C29.8018 11.8591 29.0845 12.5182 28.2893 12.5182C27.4351 12.5182 26.7768 11.8008 26.7768 11.0353V10.3456V9.78718L26.2218 9.84862C18.2073 10.7359 11.8071 17.0355 10.9051 24.9452L10.8416 25.5018H11.4019H12.1019C12.9561 25.5018 13.6144 26.2192 13.6144 26.9847C13.6144 27.8086 12.897 28.4676 12.1019 28.4676H11.4019H10.8416L10.9051 29.0243C11.8071 36.934 18.2073 43.2336 26.2218 44.1209L26.7768 44.1823V43.6239V42.9342C26.7768 42.1104 27.4942 41.4513 28.2893 41.4513C29.1436 41.4513 29.8018 42.1687 29.8018 42.9342V43.6239Z"
                            fill="#12582E"
                            stroke="#12582E"
                        />
                    </svg>
                    <div className="flex h-full flex-col items-start justify-start">
                        <p className="select-none font-sans text-[1rem] font-bold">
                            {todayResult.total_invoice_today} đơn đang phục vụ
                        </p>
                        <p className="select-none font-sans text-[2.25rem] font-bold text-[#005B6F]">
                            {formatNumberToCurrency(todayResult.total_income_pending)} đ
                        </p>
                    </div>
                </div>
                {/* Customer Component */}
                <div className="flex h-full w-[14.639rem] flex-row items-center justify-start">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 56 51"
                        fill="none"
                        className="h-[3.14338rem] w-[3.444rem]"
                    >
                        <path
                            d="M25.4079 44.2295C23.8021 44.2295 22.4796 43.8141 21.2517 42.9833C18.4179 41.0726 17.7567 37.5833 19.5514 33.7618C20.5904 31.6018 22.3852 30.1895 23.991 28.8603C24.3688 28.528 24.8411 28.1957 25.2189 27.7803C25.9746 27.1157 27.2026 27.0326 28.0527 27.6141L36.4596 33.3464C37.3097 33.928 37.4986 35.008 36.9319 35.8387C36.1762 36.8357 35.515 37.7495 34.9482 38.5803C34.0981 39.8264 33.0591 41.2387 31.4533 42.1526C29.753 43.1495 28.2416 43.8141 26.7303 44.0633C26.258 44.1464 25.7857 44.2295 25.4079 44.2295ZM26.9192 31.6018C26.8248 31.6018 26.9192 31.6018 26.9192 31.6018C25.4079 32.7649 24.1799 33.7618 23.5187 35.2572C23.2353 35.8387 22.0073 38.7464 23.991 40.0757C24.5577 40.408 25.03 40.6572 26.258 40.491C26.7303 40.408 27.6749 40.1587 29.1862 39.2449C30.1308 38.6633 30.8865 37.7495 31.4533 36.8357C31.7366 36.3372 32.1145 35.9218 32.4923 35.4233L26.9192 31.6018Z"
                            fill="#500606"
                        />
                        <path
                            d="M38.4434 33.3464C37.9711 33.3464 37.4988 33.1803 37.1209 32.9311L28.9974 27.3649C28.0529 26.7003 27.8639 25.5372 28.6196 24.7064C28.7141 24.6234 28.8085 24.5403 28.903 24.4572C30.6977 22.2972 30.9811 20.1372 31.3589 17.3957C31.4534 16.8141 31.5478 16.1495 31.6423 15.4849C32.398 10.5834 34.8539 7.34336 38.8212 3.6049C40.427 2.10951 43.2608 0.281822 46.2835 0.0325915C48.0782 -0.133562 49.684 0.364899 50.8175 0.863361C55.5405 2.85721 56.2017 7.75875 55.2571 11.248C54.2181 15.568 52.5178 18.8911 49.8729 22.6295C48.0782 25.1218 46.3779 26.7834 44.2998 28.7772C43.8275 29.2757 43.2608 29.6911 42.7885 30.1064C41.9384 30.8541 41.0882 31.6018 40.427 32.4326C40.427 32.4326 40.427 32.4326 40.3325 32.5157C40.2381 32.5987 40.1436 32.7649 40.0492 32.848C39.5769 33.0972 39.0101 33.3464 38.4434 33.3464ZM40.2381 32.5157C40.1436 32.5157 40.2381 32.5157 40.2381 32.5157C40.1436 32.5157 40.2381 32.5157 40.2381 32.5157ZM33.2481 25.5372L38.16 28.8603C38.7267 28.3618 39.199 27.8634 39.7658 27.3649C40.2381 26.9495 40.7104 26.5341 41.1827 26.1187C43.1663 24.2911 44.6777 22.7126 46.3779 20.4695C48.8339 17.1464 50.2508 14.2387 51.1954 10.3341C51.7621 8.09105 51.4787 5.18336 49.0228 4.10336C48.2671 3.77105 47.417 3.6049 46.7558 3.68798C45.3389 3.77105 43.3552 4.85105 42.0328 6.09721C38.5378 9.42028 36.5542 11.9957 35.893 15.9834C35.7985 16.648 35.704 17.2295 35.6096 17.8111C35.2318 20.4695 34.9484 22.9618 33.2481 25.5372Z"
                            fill="#500606"
                        />
                        <path
                            d="M8.02739 50.2941C7.55509 50.2941 7.0828 50.211 6.51604 50.128C4.0601 49.7126 2.83213 48.2172 1.982 47.2203C1.03741 45.9741 0.754032 44.3126 0.565113 42.8172C0.376195 41.1557 0.848491 39.6603 1.32079 38.1649C1.69862 37.0849 2.07646 36.0049 2.4543 35.008V34.9249C2.73768 34.011 3.87119 33.4295 4.91024 33.6787L15.3007 35.6726C16.3398 35.8387 17.001 36.6695 17.001 37.5833C17.001 38.0818 16.9066 38.5803 16.9066 39.0787C16.8121 40.9895 16.8121 43.2326 15.5841 45.3926C14.1672 47.8018 11.5224 50.2941 8.02739 50.2941ZM5.94929 37.6664C5.76037 38.1649 5.57145 38.7464 5.38253 39.2449C5.0047 40.408 4.62686 41.488 4.72132 42.4018C4.81578 43.2326 5.0047 44.4787 5.47699 45.1433C6.13821 46.1403 6.70496 46.3895 7.27172 46.4726C9.1609 46.8049 10.8612 45.2264 11.7113 43.648C12.5614 42.2357 12.5614 40.6572 12.6559 38.9126L5.94929 37.6664Z"
                            fill="#500606"
                        />
                        <path
                            d="M16.1508 34.6757C15.9619 34.6757 15.8674 34.6757 15.6785 34.5926L5.66584 32.6818C4.72125 32.5157 3.96558 31.768 3.96558 30.8541C3.96558 30.6049 3.96558 30.4387 4.06004 30.2726C4.06004 30.2726 4.06004 30.2726 4.06004 30.1895C4.34341 29.1095 4.43787 28.0295 4.53233 26.9495C4.62679 26.368 4.62679 25.7864 4.72125 25.1218C5.09909 22.2972 5.47692 20.0541 6.32706 17.3126C7.64949 13.1587 9.53867 9.91873 12.5614 6.34643C15.6785 2.52489 20.4015 1.0295 24.3688 2.60796C25.8801 3.1895 27.2025 4.02027 27.9582 5.10027C29.6585 7.26027 30.0363 10.3341 29.7529 12.4941C29.0917 16.9803 28.2416 21.051 24.1798 25.1218C23.7076 25.6203 23.1408 26.1187 22.6685 26.5341C20.4959 28.611 18.9846 30.1064 18.2289 32.6818C18.2289 32.7649 18.2289 32.931 18.1345 32.931C18.04 33.4295 17.7566 33.8449 17.3788 34.1772C17.0954 34.5095 16.6231 34.6757 16.1508 34.6757ZM8.49962 29.4418L14.545 30.6049C15.5841 27.7803 17.5677 25.9526 19.5513 24.0418C20.0236 23.6264 20.4959 23.128 20.9682 22.6295C23.9909 19.6387 24.8411 16.731 25.5023 12.0787C25.6912 10.4172 25.3134 8.42335 24.4632 7.26027C24.0854 6.84489 23.4242 6.4295 22.6685 6.0972C20.1181 5.10027 17.3788 6.84489 15.9619 8.67258C13.2226 11.8295 11.6168 14.6541 10.3888 18.3926C9.53867 20.8018 9.25529 22.7957 8.87746 25.5372C8.783 26.0357 8.783 26.6172 8.68854 27.1987C8.68854 27.9464 8.68854 28.6941 8.49962 29.4418Z"
                            fill="#500606"
                        />
                    </svg>
                    <div className="flex h-full flex-col items-center justify-start">
                        <p className="select-none font-sans text-[1rem] font-bold">Khách hàng</p>
                        <p className="select-none font-sans text-[2.25rem] font-bold text-[#500606]">
                            {todayResult.total_customer_today}
                        </p>
                        <p className="select-none font-sans text-[1rem] font-normal">
                            Hôm qua {todayResult.total_customer_yesterday}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
