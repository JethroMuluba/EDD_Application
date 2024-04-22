[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=14782200&assignment_repo_type=AssignmentRepo)
Read me, please!

function Home() {
    const [showMenu, setShowMenu] = useState({
        services: false,
        resources: false,
        contact: false,
        about: false
    });

    const handleMouseEnter = (menu) => {
        setShowMenu({ ...showMenu, [menu]: true });
    };

    const handleMouseLeave = (menu) => {
        setShowMenu({ ...showMenu, [menu]: false });
    };







                        <ul className="flex w-full gap-[50px]">
                            <li className="mr-6 relative" onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={() => handleMouseLeave('services')}>
                                <a href="" className="hover:text-gray-300">Direction</a>
                                {showMenu.services && (
                                    <ul className="absolute top-full left-0 bg-white border border-gray-200 py-2 px-4">
                                        <li><a href="#">Discipline</a></li>
                                        <li><a href="#">Etude</a></li>
                                        <li><a href="#">Finance</a></li>
                                    </ul>
                                )}
                            </li>

                            <li className="mr-6 relative" onMouseEnter={() => handleMouseEnter('resources')} onMouseLeave={() => handleMouseLeave('resources')}>
                                <a href="" className="hover:text-gray-300">Resources</a>
                                {showMenu.resources && (
                                    <ul className="absolute top-full left-0 bg-white border border-gray-200 py-2 px-4">
                                        <li><a href="#">Humaine</a></li>
                                        <li><a href="#">Materiels 2</a></li>
                                        <li><a href="#">Scientifique </a></li>
                                    </ul>
                                )}
                            </li>

                            <li className="mr-6 relative" onMouseEnter={() => handleMouseEnter('contact')} onMouseLeave={() => handleMouseLeave('contact')}>
                                <a href="" className="hover:text-gray-300">Contact</a>
                                {showMenu.contact && (
                                    <ul className="absolute top-full left-0 bg-white border border-gray-200 py-2 px-4">
                                        <li><a href="#">Contact 1</a></li>
                                        <li><a href="#">Contact 2</a></li>
                                        <li><a href="#">Contact 3</a></li>
                                    </ul>
                                )}
                            </li>

                            <li className="mr-6 relative" onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={() => handleMouseLeave('about')}>
                                <a href="" className="hover:text-gray-300">About</a>
                                {showMenu.about && (
                                    <ul className="absolute top-full left-0 bg-white border border-gray-200 py-2 px-4">
                                        <li><a href="#">About 1</a></li>
                                        <li><a href="#">About 2</a></li>
                                        <li><a href="#">About 3</a></li>
                                    </ul>
                                )}
                            </li>
                        </ul>