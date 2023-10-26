import { InterviewCategory, RightContent } from "@/components";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { ShadButton } from "@/components/ui/ShadButton";
import { InterviewImage } from "@/utils/images";
import Image from "next/image";

const InterviewHomePage = () => {
  return (
    <main className="bg-bkg pt-5 text-defaultText">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-5 px-5 sm:px-10 md:flex-row">
        <aside>
          <InterviewCategory
            categories={[
              "technology",
              "marketing",
              "finance",
              "education",
              "healthcare",
            ]}
          />
        </aside>
        <section className="flex w-full flex-col">
          <article className="flex w-full items-center justify-between gap-8 rounded-2xl bg-bkg-2 p-5 text-interviewText md:flex-row">
            <div className="flex w-full flex-col gap-5 sm:max-w-[435px]">
              <div className="flex items-center gap-4">
                <Avatar>
                  {/* Dynamic Image for users need to be implemented */}
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="User Avatar"
                  />
                  {/* Modify to say username initials */}
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <address className="font-semibold not-italic">
                    Matthew Gajo
                  </address>
                  <time className="text-sm text-secondary3">
                    Today, October 22
                  </time>
                </div>
              </div>
              <div className="rounded-lg sm:hidden">
                <Image
                  src={InterviewImage}
                  alt="Interview Image"
                  className="w-full object-fill"
                />
              </div>
              <h2 className="text-lg font-semibold">
                How I Launched and Grew My Startup by 500% During the Covid
                Crisis
              </h2>
              <div className="flex">
                <div className="flex w-full flex-col justify-between gap-5 sm:flex-row">
                  <div>
                    <div className="flex gap-6">
                      <div className="flex flex-col items-center">
                        <p className="text-sm font-bold">$23k/mo</p>
                        <small className="text-xs text-secondary3">
                          Revenue
                        </small>
                      </div>
                      <div className="flex flex-col items-center pl-6">
                        <p className="text-sm font-bold">27</p>
                        <small className="text-xs text-secondary3">
                          Updates
                        </small>
                      </div>
                      <div className="flex flex-col items-center pl-6">
                        <p className="text-sm font-bold">Image</p>
                        <small className="text-xs text-secondary3">
                          Website
                        </small>
                      </div>
                    </div>
                  </div>
                  <ShadButton className="bg-blue hover:bg-blue/50">
                    Full Details
                  </ShadButton>
                </div>
              </div>
            </div>
            <div className="hidden h-fit w-fit overflow-hidden rounded-lg sm:block">
              <Image
                src={InterviewImage}
                alt="Interview Image"
                className="min-h-[180px] min-w-[280px] object-cover"
              />
            </div>
          </article>
        </section>
        <RightContent />
      </div>
    </main>
  );
};

export default InterviewHomePage;
