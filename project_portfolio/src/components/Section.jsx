function Section({ sectionName = "", sectionId = "", children }) {
    return (
        <div id={sectionId} className="mx-auto max-w-screen-xl scroll-mt-20 px-4 py-10">
            {sectionName ? <div className="py-10 text-center text-3xl">{sectionName}</div> : ""}
            {children}
        </div>
    )
}

export default Section
