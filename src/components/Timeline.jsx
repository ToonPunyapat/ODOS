function Timeline() {
  return (
    <div>
      <div className="hidden sm:block md:block lg:block">
        <img src={"/images/timeline_en_blue_bg.png"} alt="ODOS_Timeline" />
      </div>
      <div className="sm:hidden">
        <img
          src={"/images/timeline_en_blue_bg_mb.jpg"}
          alt="ODOS_Timeline"
        />
      </div>
    </div>
  );
}

export default Timeline;
